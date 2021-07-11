import { debounce } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  ChangeEventHandler,
  FC,
  useMemo,
  useState,
} from 'react';
import {
  array,
  number,
  object,
  string,
  ValidationError,
} from 'yup';

import { DataEntry } from '@/interface/treemap.interface';


export interface DataInputProps {
  onChange?(value: DataEntry[]): void,
  defaultValue?: DataEntry[];
}

type DataInputState = 'valid' | 'syntax-error' | 'validation-error' | 'size-error';

interface ErrorDetail {
  path?: string;
  message: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}));

const schema = array().max(50).of(object({
  name: string().max(50).required(),
  weight: number().integer().min(1).required(),
  value: number().required(),
}));

const computeErrorMessage = (detail?: ErrorDetail) => {
  if (!detail) {
    return undefined;
  }

  const prefix = detail.path ? `Error at ${detail.path}. ` : '';

  return `${prefix}${detail.message}`;
};

export const DataInput: FC<DataInputProps> = ({
  onChange,
  defaultValue,
}) => {
  const classes = useStyles();
  const [state, setState] = useState<DataInputState>('valid');
  const [defaultInput] = useState(() => defaultValue && JSON.stringify(defaultValue, undefined, 2));
  const [errorDetail, setErrorDetail] = useState<ErrorDetail>();

  const handleChange = useMemo<ChangeEventHandler<HTMLTextAreaElement>>(() => debounce((e) => {
    try {
      const parsed = JSON.parse(e.target.value) as DataEntry[];

      schema.validate(parsed)
        .then(() => {
          onChange?.(parsed);
          setState('valid');
          setErrorDetail(undefined);
        })
        .catch((err: ValidationError) => {
          setErrorDetail({
            path: err.path,
            message: err.message,
          });
          setState('validation-error');
        });
    } catch (error) {
      setState('syntax-error');
      setErrorDetail({
        message: error.message,
      });
    }
  }, 500), [onChange]);

  const errorMessage = computeErrorMessage(errorDetail);

  return (
    <>
      <TextField
        id="data-input"
        className={classes.root}
        error={state !== 'valid'}
        label="Data"
        multiline
        defaultValue={defaultInput}
        onChange={handleChange}
        rowsMax={20}
        variant="outlined"
        helperText={errorMessage}
        placeholder="[{ name: 'A', weight: 3, value: -0.02 }]"
      />
    </>
  );
};

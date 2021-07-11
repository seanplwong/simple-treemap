import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';


export interface RowNumberInputProps {
  onChange?(value: number): void;
  max: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
}));

export const RowNumberInput: FC<RowNumberInputProps> = ({ onChange, max }) => {
  const classes = useStyles();
  const [state, setState] = useState<'valid' | 'error'>('valid');
  const [errorMessage, setErrorMessage] = useState<string>();
  const inputValue = useRef<string>();

  const validateInput = useCallback((input: string) => {
    const parsed = window.parseInt(input);
    if (Number.isNaN(parsed)) {
      throw new Error('Invalid number');
    }

    if (parsed < 0) {
      throw new Error('This field must be larger than 0');
    }

    if (parsed > max) {
      throw new Error('This field must not exceed data length');
    }

    if (!Number.isInteger(window.parseFloat(input))) {
      throw new Error('This field must be an integer');
    }

    return parsed;
  }, [max]);

  const validate = useCallback((input: string) => {
    try {
      const parsed = validateInput(input);
      setState('valid');
      setErrorMessage(undefined);

      return parsed;
    } catch (err) {
      setState('error');
      setErrorMessage(err.message);
      return undefined;
    }
  }, [validateInput]);

  useEffect(() => {
    if (!inputValue.current) {
      return;
    }

    validate(inputValue.current);
  }, [validate]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    inputValue.current = e.target.value;

    const parsed = validate(e.target.value);
    if (!parsed) {
      return;
    }

    onChange?.(parsed);
  }, [onChange, validate]);

  return (
    <>
      <TextField
        id="row-input"
        className={classes.root}
        error={state !== 'valid'}
        label="Row Number"
        type="number"
        onChange={handleChange}
        variant="outlined"
        helperText={errorMessage}
      />
    </>
  );
};

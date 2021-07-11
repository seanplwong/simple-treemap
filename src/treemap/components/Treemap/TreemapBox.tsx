import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { FC } from 'react';


export interface TreemapBoxProps {
  width: number;
  name: string;
  value: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    fontWeight: 500,
    fontSize: theme.typography.fontSize * 1.5,
  },
}));

const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export const TreemapBox: FC<TreemapBoxProps> = ({ width, value, name }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        height: '100%',
        width: `${width}%`,
        backgroundColor: value < 0 ? '#400' : '#040',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography className={classes.root} align="center">{name}</Typography>
      <Typography>
        {round(value * 100)}
        %
      </Typography>
    </div>
  );
};

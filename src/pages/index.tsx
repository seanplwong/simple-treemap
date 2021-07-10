import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Layout } from '@/ui/components/Layout';
import { Treemap } from '@/treemap/components/Treemap';
import { clsx } from '@/vendor/clsx';
import { DataInput } from '@/treemap/components/DataInput';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function EpisodePage() {
  const classes = useStyles();

  return (
    <Layout>
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={clsx(classes.paper)}>
              <DataInput />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper>
              <Treemap />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

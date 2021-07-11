import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Layout } from '@/ui/components/Layout';
import { Treemap } from '@/treemap/components/Treemap';
import { clsx } from '@/vendor/clsx';
import { TreemapInput } from '@/treemap/components/TreemapInput';


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const defaultData = [
  { name: 'A', weight: 3, value: -0.02 },
  { name: 'B', weight: 3, value: 0.05 },
  { name: 'C', weight: 6, value: 0.015 },
  { name: 'D', weight: 2, value: -0.01 },
  { name: 'E', weight: 3, value: 0.01 },
];

export default function IndexPage() {
  const classes = useStyles();

  return (
    <Layout>
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className={clsx(classes.paper)}>
              <TreemapInput
                defaultData={defaultData}
              />
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

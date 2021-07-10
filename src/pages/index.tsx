import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NoSsr from '@material-ui/core/NoSsr';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { Layout } from '@/ui/components/Layout';


const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
}));

export default function EpisodePage() {
  const classes = useStyles();

  return (
    <Layout title="Hello World">
      <Box className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>Hello World</div>
          </Grid>
          <Grid item xs={12}>
            <NoSsr>
              <div>Hello World</div>
            </NoSsr>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

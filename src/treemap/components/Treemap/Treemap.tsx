import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FC, useMemo } from 'react';

import { DataEntry } from '@/interface/treemap.interface';
import { TreemapBox } from './TreemapBox';


export interface TreemapProps {
  data: DataEntry[];
  rowNumber?: number;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(2),
    flex: '1 1 auto',
    width: '100%',
    alignContent: 'start',
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
  },

}));

const computeMaxWeight = (data: DataEntry[]) => (
  data.reduce((maxSoFar, { weight }) => (maxSoFar > weight ? maxSoFar : weight), 0)
);

const computeTotalWeight = (data: DataEntry[]) => (
  data.reduce((acc, { weight }) => (acc + weight), 0)
);

export const Treemap: FC<TreemapProps> = ({
  data,
  rowNumber,
}) => {
  const classes = useStyles();
  const maxWeight = useMemo(() => computeMaxWeight(data), [data]);

  const table = useMemo(() => {
    const theTable: DataEntry[][] = [];
    let rowIndex = 0;
    data.forEach((entry) => {
      if (theTable[rowIndex] === undefined) {
        theTable[rowIndex] = [];
      }

      const theRow = theTable[rowIndex];
      const rowWeight = computeTotalWeight(theRow);
      const budgetLeft = maxWeight - rowWeight;

      if (budgetLeft < entry.weight) {
        // next line
        rowIndex += 1;
        if (rowNumber !== undefined && rowIndex > rowNumber) {
          return;
        }
        theTable.push([entry]);
        return;
      }

      theRow.push(entry);
    });

    return theTable;
  }, [data, maxWeight, rowNumber]);

  const sanitizedRowNumber = rowNumber ?? table.length;
  const height = 100 / sanitizedRowNumber;

  return (
    <Grid className={classes.container} container>
      <div style={{ flex: '0 1 auto' }}>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Result
        </Typography>
      </div>
      <Grid className={classes.root} container>
        {
          table.map((row, i) => (
            sanitizedRowNumber < (i + 1)
              ? null
              : (
                <Grid
                  style={{ height: `${height}%` }}
                  item
                  xs={12}
                  key={row.map((entry) => entry.name).join('-')}
                  container
                >
                  {
                    row.map((entry) => (
                      <TreemapBox
                        key={entry.name}
                        width={(entry.weight / maxWeight) * 100}
                        name={entry.name}
                        value={entry.value}
                      />
                    ))
                  }
                </Grid>
              )
          ))
        }
      </Grid>
    </Grid>
  );
};

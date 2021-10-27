import { Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const Task = () => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Typography>Task</Typography>
      </Paper>
    </>
  );
};

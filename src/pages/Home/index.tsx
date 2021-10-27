import { Task } from '@/components/Task';
import { Button, Grid, TextField } from '@material-ui/core';
import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid justifyContent="center" container className={classes.container}>
        <Grid item className={classes.addTask}>
          <TextField label="Add Task" />
          <Button variant="contained" color="primary" className={classes.addButton}>
            Add
          </Button>
        </Grid>
        <Grid className={classes.tasksList}>
          <Task />
        </Grid>
      </Grid>
    </>
  );
};

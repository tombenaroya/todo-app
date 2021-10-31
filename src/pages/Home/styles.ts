import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(10),
  },
  addTask: {
    display: 'flex',
    alignItems: 'center',
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
}));

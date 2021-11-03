import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { AssignmentTurnedIn } from '@material-ui/icons';
import { FC } from 'react';
import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AssignmentTurnedIn />
          </IconButton>
          <Typography variant="h6">Todo App</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

import { filterActions } from '@/types/Todo';
import { Button, TextField } from '@material-ui/core';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { useStyles } from './styles';

interface TodoActionsProps {
  addTodo: (description: string) => void;
  setFilterAction: Dispatch<SetStateAction<filterActions>>;
  filterAction: filterActions;
  clearCompletedTodos: () => void;
}

const TodoActions: FC<TodoActionsProps> = props => {
  const { addTodo, setFilterAction, filterAction, clearCompletedTodos } = props;

  const [input, setInput] = useState<string>('');
  const classes = useStyles();

  const handleNewTodo = (description: string) => {
    addTodo(description);
    setInput('');
  };

  return (
    <>
      <TextField
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        label="Add Task"
      />
      <Button
        disabled={input === ''}
        onClick={() => handleNewTodo(input)}
        variant="contained"
        color="primary"
        className={classes.actionButton}
      >
        Add
      </Button>
      <Button
        onClick={() => setFilterAction('All')}
        color={filterAction === 'All' ? 'primary' : 'default'}
        variant="contained"
        className={classes.actionButton}
      >
        All
      </Button>
      <Button
        onClick={() => setFilterAction('Active')}
        color={filterAction === 'Active' ? 'primary' : 'default'}
        variant="contained"
        className={classes.actionButton}
      >
        Active
      </Button>
      <Button
        onClick={() => setFilterAction('Completed')}
        color={filterAction === 'Completed' ? 'primary' : 'default'}
        variant="contained"
        className={classes.actionButton}
      >
        Completed
      </Button>
      <Button onClick={clearCompletedTodos} variant="contained" className={classes.actionButton}>
        Clear completed
      </Button>
    </>
  );
};

export default TodoActions;

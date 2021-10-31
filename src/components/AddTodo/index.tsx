import { Button, TextField } from '@material-ui/core';
import { ChangeEvent, FC, useState } from 'react';
import { useStyles } from './styles';

interface Props {
  addTodo: (description: string) => void;
}

export const AddTodo: FC<Props> = ({ addTodo }) => {
  const [input, setInput] = useState('');
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
        disabled={input === '' ? true : false}
        onClick={() => handleNewTodo(input)}
        variant="contained"
        color="primary"
        className={classes.addButton}
      >
        Add
      </Button>
    </>
  );
};

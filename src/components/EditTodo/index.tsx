import { todoAction, Todo as Task } from '@/types/Todo';
import { IconButton, ListItemSecondaryAction, TextField } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React, { ChangeEvent, FC, useState } from 'react';

interface EditTodoProps {
  todo: Task;
  handleUpdateTodo: todoAction;
  cancelEdit: () => void;
}

const EditTodo: FC<EditTodoProps> = ({ todo, handleUpdateTodo, cancelEdit }) => {
  const [input, setInput] = useState<string>(todo.description);

  return (
    <>
      <TextField
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        defaultValue={todo.description}
        label="Description"
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => handleUpdateTodo({ ...todo, description: input })}
          disabled={input === ''}
          color="primary"
          edge="end"
        >
          <Check />
        </IconButton>
        <IconButton onClick={cancelEdit} color="secondary" edge="end">
          <Close />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

export default EditTodo;

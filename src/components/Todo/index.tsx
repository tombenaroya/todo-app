import React, { FC } from 'react';
import { Todo as Task, todoAction } from '@/types/Todo';
import { Checkbox, IconButton, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  todo: Task;
  updateTodo: todoAction;
  openEdit: () => void;
  deleteTodo: (id: number) => void;
}

export const Todo: FC<Props> = ({ todo, updateTodo, openEdit, deleteTodo }) => {
  return (
    <>
      <Checkbox
        checked={todo.completed}
        onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
      />
      <ListItemText primary={todo.description} />
      <ListItemSecondaryAction>
        <IconButton onClick={openEdit} color="primary" edge="end" aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton
          onClick={() => deleteTodo(todo.id)}
          color="secondary"
          edge="end"
          aria-label="delete"
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

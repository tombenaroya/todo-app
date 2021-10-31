import { FC } from 'react';
import { Todo as Task, todoAction } from '@/types/Todo';
import { Checkbox, IconButton, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

interface Props {
  todo: Task;
  updateTodoState: todoAction;
  openEdit: () => void;
  deleteTodo: (id: number) => void;
}

export const Todo: FC<Props> = ({ todo, updateTodoState, openEdit, deleteTodo }) => {
  return (
    <>
      <Checkbox color="primary" checked={todo.completed} onChange={() => updateTodoState(todo)} />
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

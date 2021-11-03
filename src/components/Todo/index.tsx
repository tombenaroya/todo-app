import { FC } from 'react';
import { Todo as Task, todoAction } from '@/types/Todo';
import { Checkbox, IconButton, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

interface TodoProps {
  todo: Task;
  updateTodoState: todoAction;
  openEdit: () => void;
  deleteTodo: (id: string) => void;
}

const Todo: FC<TodoProps> = ({ todo, updateTodoState, openEdit, deleteTodo }) => {
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

export default Todo;

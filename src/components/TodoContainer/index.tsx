import { ListItem, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Todo as Task, todoAction } from '@/types/Todo';
import { FC, useState } from 'react';
import { EditTodo } from '../EditTodo';
import { Todo } from '../Todo';

interface Props {
  todo: Task;
  updateTodo: todoAction;
  deleteTodo: (id: number) => void;
}

export const TodoContainer: FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);

  const handleUpdateTodo = (todo: Task): void => {
    updateTodo(todo);
    setEdit(false);
  };

  const updateTodoState: todoAction = todo => updateTodo({ ...todo, completed: !todo.completed });
  const cancelEdit = () => setEdit(false);
  const openEdit = () => setEdit(true);

  return (
    <>
      <Paper className={classes.container}>
        <ListItem>
          {edit ? (
            <EditTodo cancelEdit={cancelEdit} todo={todo} handleUpdateTodo={handleUpdateTodo} />
          ) : (
            <Todo
              todo={todo}
              openEdit={openEdit}
              updateTodoState={updateTodoState}
              deleteTodo={deleteTodo}
            />
          )}
        </ListItem>
      </Paper>
    </>
  );
};

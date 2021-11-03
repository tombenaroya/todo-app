import { ListItem, Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Todo as Task, todoAction } from '@/types/Todo';
import { FC, useState } from 'react';
import EditTodo from '../EditTodo';
import Todo from '../Todo';

interface TodoContainerProps {
  todo: Task;
  updateTodo: todoAction;
  deleteTodo: (id: string) => void;
}

export const TodoContainer: FC<TodoContainerProps> = ({ todo, updateTodo, deleteTodo }) => {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleUpdateTodo = (todo: Task): void => {
    updateTodo(todo);
    setIsEditable(false);
  };

  const updateTodoState: todoAction = todo => updateTodo({ ...todo, completed: !todo.completed });
  const cancelEdit = () => setIsEditable(false);
  const openEdit = () => setIsEditable(true);

  return (
    <>
      <Paper className={classes.container}>
        <ListItem>
          {isEditable ? (
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

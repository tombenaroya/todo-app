import { AddTodo } from '@/components/AddTodo';
import { TodoContainer } from '@/components/TodoContainer';
import { Todo as Task, todoAction } from '@/types/Todo';
import { Container, Grid, List, TextField, Typography } from '@material-ui/core';
import { ChangeEvent, FC, useState } from 'react';
import { useStyles } from './styles';

export const Home: FC = () => {
  const classes = useStyles();

  const [todos, setTodos] = useState<Task[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const addTodo = (description: string): void =>
    setTodos([...todos, { id: todos.length, description, completed: false }]);

  const updateTodo: todoAction = updatedTodo =>
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));

  const deleteTodo = (deletedTodoId: number): void =>
    setTodos(todos.filter(todo => todo.id !== deletedTodoId));

  const filteredTodos = todos.filter(({ description }) => description.includes(searchInput));

  return (
    <>
      <Grid justifyContent="center" container className={classes.container}>
        <Grid item className={classes.addTask}>
          <AddTodo addTodo={addTodo} />
        </Grid>
        <Grid container justify="center" className={classes.search}>
          <TextField
            value={searchInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
            label="Search task"
          />
        </Grid>
        <Container>
          <List>
            {filteredTodos.map(todo => (
              <TodoContainer
                key={todo.id}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                todo={todo}
              />
            ))}
          </List>
        </Container>
      </Grid>
    </>
  );
};

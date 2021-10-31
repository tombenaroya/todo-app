import { TodoContainer } from '@/components/TodoContainer';
import { Todo as Task, todoAction } from '@/types/Todo';
import { Button, Container, Grid, List, TextField } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useStyles } from './styles';

export const Home = () => {
  const classes = useStyles();

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Task[]>([
    {
      id: 0,
      description: 'task 1',
      completed: false,
    },
  ]);

  const addTodo: todoAction = newTodo => setTodos([...todos, newTodo]);
  const handleNewTodo = (newTodo: Task) => {
    addTodo(newTodo);
    setInput('');
  };

  const updateTodo: todoAction = updatedTodo =>
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));

  const deleteTodo = (deletedTodoId: number): void =>
    setTodos(todos.filter(todo => todo.id !== deletedTodoId));

  return (
    <>
      <Grid justifyContent="center" container className={classes.container}>
        <Grid item className={classes.addTask}>
          <TextField
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            label="Add Task"
          />
          <Button
            onClick={() =>
              handleNewTodo({ id: todos.length, description: input, completed: false })
            }
            variant="contained"
            color="primary"
            className={classes.addButton}
          >
            Add
          </Button>
        </Grid>
        <Container>
          <List>
            {todos.map(todo => (
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

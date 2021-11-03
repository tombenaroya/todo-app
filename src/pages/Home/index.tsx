import TodoActions from '@/components/TodoActions';
import { TodoContainer } from '@/components/TodoContainer';
import { filterActions, filterActionsFunctions, Todo as Task, todoAction } from '@/types/Todo';
import { Container, Grid, List, TextField } from '@material-ui/core';
import { ChangeEvent, FC, useState } from 'react';
import { useStyles } from './styles';
import { v4 as uuidv4 } from 'uuid';

export const Home: FC = () => {
  const classes = useStyles();

  const [todos, setTodos] = useState<Task[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterAction, setFilterAction] = useState<filterActions>('All');

  const addTodo = (description: string): void =>
    setTodos([...todos, { id: uuidv4(), description, completed: false }]);

  const updateTodo: todoAction = updatedTodo =>
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));

  const deleteTodo = (deletedTodoId: string): void =>
    setTodos(todos.filter(todo => todo.id !== deletedTodoId));

  const clearCompletedTodos = (): void =>
    setTodos(todos.map(todo => ({ ...todo, completed: false })));

  const filterTodos = (filterAction: (todo: Task) => boolean) => (todos: Task[]) =>
    todos.filter(filterAction);

  const filterByState = filterTodos(filterActionsFunctions[filterAction]);
  const filteredTodosByState = filterByState(todos);

  const searchedTodos = filteredTodosByState.filter(({ description }) =>
    description.includes(searchInput)
  );

  return (
    <>
      <Grid justifyContent="center" container className={classes.container}>
        <Grid item className={classes.addTask}>
          <TodoActions
            clearCompletedTodos={clearCompletedTodos}
            filterAction={filterAction}
            setFilterAction={setFilterAction}
            addTodo={addTodo}
          />
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
            {searchedTodos.map(todo => (
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

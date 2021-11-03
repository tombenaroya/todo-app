export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export type todoAction = (todo: Todo) => void;
export type filterActions = 'All' | 'Completed' | 'Active';

export const filterActionsFunctions = {
  All: (todo: Todo) => true,
  Active: (todo: Todo) => todo.completed === false,
  Completed: (todo: Todo) => todo.completed === true,
};

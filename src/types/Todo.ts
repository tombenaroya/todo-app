export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

export type todoAction = (todo: Todo) => void;

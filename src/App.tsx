import { FC } from 'react';
import './App.css';
import { TodoList } from './components/TodoApp/TodoList/TodoList';

export const App: FC = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

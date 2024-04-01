import { FC, useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { deleteTodo, toggleTodo } from '../../../store/todoSlice';

export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

export const TodoList: FC = () => {
  const [text, setText] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (todoId: number) => {
    dispatch(deleteTodo(todoId));
  };

  const handleChangedTodo = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  return (
    <div>
      <TodoItem text={text} setText={setText} todos={todos.todos} />
      <ul className='list'>
        {todos.todos.map((todo: ITodo) => (
          <li key={todo.id} style={{ listStyle: 'none' }} className='list-item'>
            <input
              type='checkbox'
              checked={todo.isDone}
              onChange={() => handleChangedTodo(todo.id)}
            />
            <span className={todo.isDone ? 'completed' : ''}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

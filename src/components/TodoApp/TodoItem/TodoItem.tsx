import { FC, Dispatch, SetStateAction } from 'react';
import { TodoInput } from '../../TodoInput/TodoInput';
import { ITodo } from '../TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../store/todoSlice';

interface ITodoItem {
  text: string;
  todos: ITodo[];
  setText: Dispatch<SetStateAction<string>>;
}

let nextId: number = 1;
export const getNextId = () => nextId++;

export const TodoItem: FC<ITodoItem> = ({ text, setText }) => {
  const dispatch = useDispatch();
  const handleAddNewTodo = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  };
  return (
    <div>
      <TodoInput text={text} setText={setText} onAddTodo={handleAddNewTodo} />
    </div>
  );
};

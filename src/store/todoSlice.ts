import { createSlice } from '@reduxjs/toolkit';
import { getNextId } from '../components/TodoApp/TodoItem/TodoItem';
import { ITodo } from '../components/TodoApp/TodoList/TodoList';
import { PayloadAction } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'Todo',
  initialState: {
    todos: [] as ITodo[],
  },
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: getNextId(),
        text: action.payload,
        isDone: false,
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;

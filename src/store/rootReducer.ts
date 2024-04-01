import { combineReducers } from 'redux';
import todoReducer from './todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export { rootReducer };
export type RootState = ReturnType<typeof rootReducer>;

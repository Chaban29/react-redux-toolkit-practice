import { Dispatch, FC, SetStateAction } from 'react';

interface ITodoInput {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  onAddTodo: () => void;
}

export const TodoInput: FC<ITodoInput> = ({
  text,
  setText,
  onAddTodo,
}: ITodoInput) => {
  return (
    <div>
      <label htmlFor='add'>
        <input
          type='text'
          value={text}
          id='add'
          name='add'
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button onClick={onAddTodo}>Add new todo</button>
    </div>
  );
};

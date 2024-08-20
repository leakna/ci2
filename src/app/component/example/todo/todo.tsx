// TodoItem.tsx
import React from 'react';

type TodoItemProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const TodoItem: React.FC<TodoItemProps> = ({ userId, id, title, completed }) => {
  return (
    <div className="todo-item">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>User ID: {userId}</p>
      <p>ID: {id}</p>
      <p>Status: {completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

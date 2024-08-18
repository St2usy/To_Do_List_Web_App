// app/components/TodoList.js
'use client';

import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue }]);
    setInputValue('');
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    const newTodo = prompt('수정할 내용을 입력하세요:', todos[index].text);
    if (newTodo) {
      const newTodos = todos.map((todo, i) => i === index ? { text: newTodo } : todo);
      setTodos(newTodos);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <h1>Todo 리스트</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          style={{ padding: '10px', width: '70%' }}
        />
        <button onClick={addTodo}>추가</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '4px' }}>
            <span>{todo.text}</span>
            <div>
              <button onClick={() => updateTodo(index)} style={{ marginRight: '10px' }}>수정</button>
              <button onClick={() => deleteTodo(index)} style={{ backgroundColor: '#ff5e5e' }}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

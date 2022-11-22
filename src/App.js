import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

// Context
import { GlobalContext } from './context/GlobalContext';

function App() {
	const { todos, addTodo, deleteTodo } = useContext(GlobalContext);
	const [newTodo, setNewTodo] = useState('');

	useEffect(() => {
		console.log('todos', todos);
		console.log('todo', newTodo);
	}, [todos]);

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo({
			name: newTodo || 'No name',
		});
		setNewTodo('');
	};

	return (
		<div className='App'>
			<div className='form-container'>
				<h1>Todo - React Context</h1>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<input
						type='text'
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
						placeholder='Add todo'
					/>
					<button>Add</button>
				</form>
			</div>
			{todos.length > 0 &&
				todos.map((todo, index) => <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />)}
		</div>
	);
}

export default App;

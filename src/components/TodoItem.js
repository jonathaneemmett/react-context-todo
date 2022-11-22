import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
			<div>{todo?.name}</div>
			<div onClick={() => deleteTodo(index)}>Delete</div>
		</div>
	);
};

export default TodoItem;

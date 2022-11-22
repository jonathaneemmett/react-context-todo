import React, { createContext, useReducer } from 'react';
// Reducer
import TodoReducer from './TodoReducer';

// State
const initialState = {
	todos: [],
	loading: false,
};

// Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer, initialState);

	function addTodo(todo) {
		setLoading();
		dispatch({
			type: 'ADD_TODO',
			payload: todo,
		});
	}

	function deleteTodo(id) {
		setLoading();
		dispatch({
			type: 'DELETE_TODO',
			payload: id,
		});
	}

	function setLoading() {
		dispatch({
			type: 'SET_LOADING',
		});
	}

	return (
		<GlobalContext.Provider value={{ todos: state.todos, addTodo, deleteTodo }}>{children}</GlobalContext.Provider>
	);
};

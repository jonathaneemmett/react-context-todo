export default (state, action) => {
	console.log('action.type', action.type);
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: state.todos ? [...state.todos, action.payload] : [action.payload],
				loading: false,
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((_, idx) => idx !== action.payload),
				loading: false,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};


export const addTodo = todoContent => (dispatch, getState) => dispatch({
    type: 'ADD_TODO', 
    payload: {
        id: getState().todos.length + 1,
        content: todoContent
    }
})

export const removeTodo = todoId => ({
    type: 'REMOVE_TODO',
    payload: { 
        id: todoId 
    }
})

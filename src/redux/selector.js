export const TodoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo)=>{
        // state.todoList
        return todo.name.includes(state.filters.search);
    });
    return todosRemaining;
};

export const searchTextSelector = (state) => state.filters.search;
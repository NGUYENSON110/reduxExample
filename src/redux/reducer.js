
const initState = {
    filters: {
        search: "",
        status: 'All',
        priority: [],
    },
    todoList: [
        {
            id: 1, name: "Learn Yoga", completed: false, priority: 'Medium',
        },

        {
            id: 2, name: "Learn Redux", completed: true, priority: 'High',
        },

        {
            id: 2, name: "Learn Javascript", completed: false, priority: 'Low',
        }
    ]
}


const rootReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }

        case "filters/searchFilterChange":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }


        default:
            return state;
    }
}

export default rootReducer;
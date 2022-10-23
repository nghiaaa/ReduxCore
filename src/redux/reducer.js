const initState = {
  filters: {
    search: "",
    status: "all",
    priority: [],
  },

  todolist: [
    { id: 1, name: "Learn Yoga", completed: false, priority: "medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "high" },
    { id: 3, name: "Learn Js", completed: false, priority: "low" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todolist/addTodo":
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };

    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,

          search: action.payload,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;

export const addTodo = (data) => {
  return {
    type: "todolist/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

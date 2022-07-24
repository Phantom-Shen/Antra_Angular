export const Api = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com"
  
  const getTodo = async () => {
    return await fetch([baseUrl, "todos"].join("/"))
    .then(res => res.json());
  }

  const addToDo = async (ToDoNew) => {
    return await fetch([baseUrl, "todos"].join("/"), {
      method: "POST",
      body: JSON.stringify(ToDoNew),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(res => res.json());
  }

  const deleteToDO = async (id) => {
    return await fetch([baseUrl, "todos", id].join("/"), {
      method: "DELETE",
    }).then(res => res.json());
  }

  return {
    getTodo,
    addToDo,
    deleteToDO
  }
})()
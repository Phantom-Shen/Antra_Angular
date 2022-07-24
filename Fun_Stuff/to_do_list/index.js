import {Api} from "./api/api.js"

const View = (() => {

  const domStr = {
    toDoList: ".to-do-list",
    toDoAdd: "#to-do-add",
  };

  const render = (element, children) => {
    element.replaceChildren(...children);
  };

  const createToDoList = (toDoList) => {
    return toDoList.map((toDo, index) => {
      const li_toDoItem = document.createElement("li");
      li_toDoItem.classList.add("to-do-item");

      const span_title = document.createElement("span");
      span_title.textContent = toDo.id + ". " + toDo.title;

      const button_delete = document.createElement("button");
      button_delete.classList.add("delete-btn");
      button_delete.id = toDo.id;
      button_delete.textContent = "X";

      li_toDoItem.appendChild(span_title);
      li_toDoItem.appendChild(button_delete);
      //   <li class="to-do-item">
      //     <span>${toDo.title}</span>
      //     <button class="delete-btn">X</button>
      //   </li>
      return li_toDoItem;
    });
  }

  return {
    render,
    domStr,
    createToDoList,
  };
})();

// -----------------------------------------------------------

const Model = ((api, view) => {
  class ToDo{
    constructor(userId, title){
      this.userId = userId;
      this.title = title;
      this.completed = false;
    }
  }

  class State{
    #toDoList = [];
    #userId = 2; // mock

    get toDoList(){
      return this.#toDoList;
    }

    set toDoList(returnedToDoList){
      this.#toDoList = returnedToDoList;
      // rerender
      const toDoList = document.querySelector(view.domStr.toDoList);
      view.render(toDoList, view.createToDoList(this.#toDoList.filter(item => !item.completed)));
    }

    get userId(){
      return this.#userId;
    }
  }

  const {getTodo, addToDo, deleteToDO} = api;

  return{
    State,
    ToDo,
    getTodo,
    addToDo,
    deleteToDO
  }

})(Api, View);

// -----------------------------------------------------------

const Controller = ((model, view) => {
  const state = new model.State();

  const init = () => {
    model.getTodo().then((returnedToDoList) => {
      state.toDoList = [...returnedToDoList.reverse()];
    });
  };

  const addToDo = () => {
    const toDoAdd = document.querySelector(view.domStr.toDoAdd);
    toDoAdd.addEventListener("keyup", (event) => {
      if(event.code === "Enter" && event.target.value.trim() !== ""){
        const toDoNew = new model.ToDo(state.userId, event.target.value);

        model.addToDo(toDoNew).then(response => {
          state.toDoList = [response, ...state.toDoList];
        });

        event.target.value = "";
      }
    });
  }

  const deleteToDo = () => {
    const toDoList = document.querySelector(view.domStr.toDoList);
    toDoList.addEventListener("click", (event) => {
      if(event.target.className === "delete-btn"){
        state.toDoList = state.toDoList.filter((item) => {
          return +item.id !== +event.target.id;
        });
        model.deleteToDO(event.target.id);
      }
    });
  }

  const bootstrap = () => {
    init();
    // add functionality
    addToDo();
    deleteToDo();
  };

  return {
    bootstrap
  };
})(Model, View);

Controller.bootstrap();
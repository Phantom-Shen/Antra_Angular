import {Api} from "./Api/api.js"

const View = (() => {

  const domStr = {
    toDoList: ".to-do-list",

  };

  const render = (element, children) => {
    element.replaceChildren(...children);
  };

  const createToDoList = (toDoList) => {
    return toDoList.map((toDo, index) => {
      const li_toDoItem = document.createElement("li");
      li_toDoItem.classList.add("to-do-item");

      const span_title = document.createElement("span");
      span_title.textContent = toDo.title;

      const button_delete = document.createElement("button");
      button_delete.classList.add("delete-btn");
      button_delete.textContent = "X";

      li_toDoItem.appendChild(span_title);
      li_toDoItem.appendChild(button_delete)
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

  class State{
    #toDoList = [];

    get toDoList(){
      return this.#toDoList;
    }

    set toDoList(returnedToDoList){
      this.#toDoList = returnedToDoList;
      // rerender
      const toDoList = document.querySelector(view.domStr.toDoList);
      view.render(toDoList, view.createToDoList(this.#toDoList));
    }
  }

  const {getTodo} = api;

  return{
    State,
    getTodo,
  }

})(Api, View);

// -----------------------------------------------------------

const Controller = ((model, view) => {
  const state = new model.State();

  const init = () => {
    model.getTodo().then((returnedToDoList) => {
      state.toDoList = [...returnedToDoList];
    });
  };

  const addToDo = () => {

  }

  const deleteToDo = () => {

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
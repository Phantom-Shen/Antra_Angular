import {Api} from "./Api/api"

const View = (() => {
  const domStr = {

  };

  const render = (elem, template) => {
    elem.innerHTML = template;
  };

  const getMovieTemplate = (movies) => {
    let template = "";
    movies.forEach((movie, index) => {
      template += `
        <li class="movie-card" id="${movie.id}">
          <img src="${movie.imgUrl}" alt="${movie.name}">
          <span class="movie-title">Movie: ${movie.name}</span>
          <span class="movie-info">Info: ${movie.outlineInfo}</span>
        </li>
      `;
    });
    return template;
  };

  const getSlideBTN = () => {
    
  }
  
  return {
    render,
    getMovieTemplate
  };
})();

// -------------------Model-------------------------

const Model = ((view) => {

})(View);

// -------------------Controller--------------------

const Controller = ((model, view) => {
  
  const init = () => {

  }
  
  return {
    init
  };
})(Model, View);

Controller.init();
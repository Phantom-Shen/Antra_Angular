import {Api} from "./api/api.js"

const View = (() => {
  const domStr = {
    movieList: ".movie-list",
    movieWrapper: ".movie-wrapper",
    btnPrev: ".slide-prev",
    btnNext: ".slide-next",
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
  
  return {
    render,
    getMovieTemplate,
    domStr,
  };
})();

// -------------------Model-------------------------

const Model = ((api, view) => {
  class State{
    #movies = [];
    #showLength = 4;
    #cur = 0;

    get cur(){
      return this.#cur;
    }

    set cur(next){
      this.#cur = next;
      
      // rerender
      const movieList = document.querySelector(view.domStr.movieList);
      const template = view.getMovieTemplate(this.#movies.slice(this.#cur, this.#cur + this.#showLength));
      view.render(movieList, template);
      if(this.#cur === 0){
        document.querySelector(view.domStr.btnPrev).style.visibility = "hidden";
      }
      else{
        document.querySelector(view.domStr.btnPrev).style.visibility = "visible";
      }
    
      if(this.#cur === this.#movies.length - this.#showLength){
        document.querySelector(view.domStr.btnNext).style.visibility = "hidden";
      }
      else{
        document.querySelector(view.domStr.btnNext).style.visibility = "visible";
      }
    }

    get showLength(){
      return this.#showLength
    }

    get movies(){
      return this.#movies;
    }

    set movies(movies){
      this.#movies = [...movies];
    }
  }

  const {getMovies} = api;

  return {
    State,
    getMovies
  };
})(Api, View);

// -------------------Controller--------------------

const Controller = ((model, view) => {
  const state = new model.State();

  const init = () => {
    model.getMovies()
    .then((movies) => {
      state.movies = [...movies];
      state.cur = 0;
    });
  };

  const btnPrev = () => {
    const btn = document.querySelector(view.domStr.btnPrev);
    btn.addEventListener("click", (event) => {
      if(state.cur === 0){
        state.cur = state.movies.length - state.showLength;
      }
      else{
        state.cur--;
      }
    });
  };

  const btnNext = () => {
    const btn = document.querySelector(view.domStr.btnNext);
    btn.addEventListener("click", (event) => {
      if(state.cur === state.movies.length - state.showLength){
        state.cur = 0;
      }
      else{
        state.cur++;
      }
    });
  };

  const bootstrap = () => {
    // fetch and hydrate data
    init();
    // add functionality
    btnPrev();
    btnNext();
  }
  
  return {
    bootstrap
  };
})(Model, View);

Controller.bootstrap();
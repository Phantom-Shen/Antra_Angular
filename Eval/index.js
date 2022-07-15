import {Api} from "./Api/api.js"
// import {movies} from "./Api/mockData.js"

const state = {
  movies:[],
  showLength:4,
  cur:0,
}

const CreateMovieCard = (data) =>{
  return `
    <li class="movie-card">
      <img src="${data.imgUrl}" alt="${data.name}">
      <span class="movie-title">Movie: ${data.name}</span>
      <span class="movie-info">Info: ${data.outlineInfo}</span>
    </li>
  `
}

const next = (event) => {
  if(state.cur === state.movies.length - state.showLength){
    state.cur = 0;
  }
  else{
    state.cur++;
  }
  renderMovieCard();
}

const prev = (event) => {
  if(state.cur === 0){
    state.cur = state.movies.length - state.showLength;
  }
  else{
    state.cur--;
  }
  renderMovieCard();
}

const renderMovieCard = () => {

  if(state.cur === 0){
    document.querySelector(".slide-prev").style.visibility = "hidden";
  }
  else{
    document.querySelector(".slide-prev").style.visibility = "visible";
  }

  if(state.cur === state.movies.length - state.showLength){
    document.querySelector(".slide-next").style.visibility = "hidden";
  }
  else{
    document.querySelector(".slide-next").style.visibility = "visible";
  }
  
  const movieList = document.querySelector(".movie-list");
  let tmp = "";
  for(let i = state.cur; i < state.cur + state.showLength; i++){
    tmp += CreateMovieCard(state.movies[i]);
  }
  movieList.innerHTML = tmp;
}

const init = async () => {
  state["movies"] = await Api.getMovies();
  // state["movies"] = [...movies];
  renderMovieCard();
  const btnPrev = document.querySelector(".slide-prev");
  const btnNext = document.querySelector(".slide-next");
  btnPrev.onclick = prev;
  btnNext.onclick = next;
}

init();
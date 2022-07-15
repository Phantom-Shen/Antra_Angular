export const Api = (() => {
  const baseUrl = 'http://localhost:4232';

  const getMovies = async () => {
    return await fetch([baseUrl, "movies"].join("/"))
    .then(res => res.json());
  }

  return {
    getMovies
  };
  
})();
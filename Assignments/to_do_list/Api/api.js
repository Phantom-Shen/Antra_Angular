export const Api = (() => {
  const baseUrl = "https://jsonplaceholder.typicode.com"
  
  const getTodo = async () => {
    return await fetch([baseUrl,"todos"].join("/"))
    .then(res => res.json());
  }

  return {
    getTodo,
  }
})()
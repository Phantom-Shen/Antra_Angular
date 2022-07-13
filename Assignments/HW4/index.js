const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
  g: "gesdrwesf"
};

const select_letters = document.getElementById("letters");
const select_fruits = document.getElementById("fruits");
let letters_options = "";
let fruits_options = "";
const getOption = (value, name) => {
  return `<option value = "${value}">${name}</option>`
}

Object.entries(state).forEach((item, index) => {
  letters_options += getOption(item[0], item[0]);
  fruits_options += getOption(item[1], item[1]);
});

select_letters.innerHTML = letters_options;
select_fruits.innerHTML = fruits_options;
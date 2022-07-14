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

const getOption = (value) => {
  const newOption =  document.createElement("option");
  newOption.value = value;
  newOption.innerHTML = value;
  return newOption;
}

Object.entries(state).forEach((item) => {
  select_letters.append(getOption(item[0]));
  select_fruits.append(getOption(item[1]));
});

select_letters.onchange = (event) => {
  select_fruits.selectedIndex = event.target.selectedIndex;
}

select_fruits.onchange = (event) => {
  select_letters.selectedIndex = event.target.selectedIndex;
}
const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

// function to clear through 'pencil' button
pencil.addEventListener("click", function () {
  allItems.innerHTML = "";
});

// function to trigger function through 'Enter'
userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addItems();
  }
});

// function to add items
function addItems() {
  const item = document.createElement("h2");
  item.innerHTML = "- " + userInput.value;
  //add crossline on list items
  item.addEventListener("click", function () {
    item.style.textDecoration !== "line-through"
      ? (item.style.textDecoration = "line-through")
      : (item.style.textDecoration = "none");
  });
  allItems.insertAdjacentElement("beforeend", item);

  userInput.value = "";
}

const groceries = document.getElementsByClassName("groceries")[0];
const eraser = document.getElementById("eraser");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

eraser.addEventListener("click", function () {
  allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    addItems();
  }
});

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

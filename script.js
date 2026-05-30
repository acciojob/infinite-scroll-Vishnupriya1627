//your code here!

const list = document.getElementById("infi-list");

let count = 1;

// Add items to the list
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
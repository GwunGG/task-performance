const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
const add_button = document.getElementById('add_button')
let maxVal = 50;
let minVal = 0

add_button.addEventListener('click',addContacts)
function addContacts() {
  const fragment = document.createDocumentFragment();
  for (minVal; minVal < maxVal; minVal++) {
    const child = document.createElement("div");
    child.textContent = minVal;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
  maxVal += 50;
  minVal += 0
}


contacts.addEventListener("scroll", (e) => {
  const items = Array.from(contacts.getElementsByClassName("contact"));
  const itemOffsets = items.map((item) => item.offsetTop);
  const topItemIndex = itemOffsets.findIndex(
    (offset) => contacts.scrollTop - offset <= -18
  );
  if (topItemIndex !== -1) {
    stickyHeader.textContent = items[topItemIndex].textContent;
  }
});

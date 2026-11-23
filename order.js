const orderLink = document.querySelector("#order");
const menu = document.querySelector(".menu-grid");
const items = [...menu.querySelectorAll("input")];
const destination = new URL(orderLink.href);
const greeting = destination.searchParams.get("text");

function updateMessage() {
  const selected = items.filter(item => item.checked).map(item => item.value);
  const message = selected.length ? greeting + "\n\nItems: " + selected.join(", ") : greeting;
  destination.searchParams.set("text", message);
  orderLink.href = destination.href;
}

items.forEach(item => { item.hidden = false; });
document.querySelector("#hint").hidden = false;
menu.addEventListener("change", updateMessage);
window.addEventListener("pageshow", updateMessage);
updateMessage();

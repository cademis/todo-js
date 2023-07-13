import { createElement } from "./render";
import { getAreas } from "./lsManager";

export const eventListeners = () => {
  const input = document.getElementById("filter-area");
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  input.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Clear the list
    ul.innerHTML = "";

    let areas = getAreas();

    filterList(areas, searchTerm, ul);
  });
};

function filterList(items, search, parentElement) {
  items
    .filter((item) => item.description.toLowerCase().includes(search))
    .forEach((item) => {
      const li = createElement("li", parentElement);
      const areaDescription = `${item.areaId}-${item.description
        .split(" ")
        .join("-")}`;
      const input = createElement("input", li, areaDescription.toLowerCase());
      input.type = "checkbox";
      const label = createElement("label", li);
      label.textContent = `${item.description} (${item.areaId})`;
      label.htmlFor = areaDescription.toLowerCase();
    });
}

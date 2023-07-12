import { getAreas, createElement } from "./render";

export const eventListeners = () => {
  const input = document.getElementById("filter-area");
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  input.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Clear the list
    ul.innerHTML = "";

    // Filter the areas array and rebuild the list

    let areas = getAreas();

    areas
      .filter((area) => area.description.toLowerCase().includes(searchTerm))
      .forEach((area) => {
        const li = createElement("li", ul);
        const areaDescription = `${area.areaId}-${area.description
          .split(" ")
          .join("-")}`;
        const input = createElement("input", li, areaDescription.toLowerCase());
        input.type = "checkbox";
        const label = createElement("label", li);
        label.textContent = `${area.description} (${area.areaId})`;
        label.htmlFor = areaDescription.toLowerCase();
      });
  });
};

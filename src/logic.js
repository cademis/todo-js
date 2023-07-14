import { createElement, renderSidebar } from "./render";
import { getAreas, addArea } from "./lsManager";

export const eventListeners = () => {
  const areaInput = document.getElementById("filter-area");
  areaInput.addEventListener("input", handleAreaInput);

  const addAreaButton = document.getElementById("add-area");
  addAreaButton.addEventListener("click", handleAddArea);

  const projectInput = document.getElementById("filter-project");
  projectInput.addEventListener("input", handleProjectInput);
};

function handleAreaInput() {
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  const areaInput = document.getElementById("filter-area");
  const searchTerm = areaInput.value;
  ul.innerHTML = "";
  filterAreaList();
}

function handleProjectInput(event) {
  console.log("todo: handleProjectInput");
  console.log(event);
}

function handleAddArea() {
  console.log("todo - add contents of input to area list");
  const areaInput = document.getElementById("filter-area").value;
  console.log(areaInput);
  addArea(areaInput);
  filterAreaList();
}

export function filterAreaList() {
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  const areaInput = document.getElementById("filter-area");
  const searchTerm = areaInput.value;
  const areas = getAreas();

  areas
    .filter((area) => area.description.toLowerCase().includes(searchTerm))
    .forEach((area) => {
      const li = createElement("li", ul);
      const areaDescription = `${area.areaId}-${area.description
        .split(" ")
        .join("-")}`;
      let lowerCaseAreaDescription = areaDescription.toLowerCase();
      const inputElement = createElement("input", li, lowerCaseAreaDescription);
      inputElement.type = "checkbox";
      const label = createElement("label", li);
      label.textContent = `${area.description} (${area.areaId})`;
      label.htmlFor = lowerCaseAreaDescription;
    });
}

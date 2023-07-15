import { createElement, renderSidebar } from "./render";
import { getAreas, addArea } from "./lsManager";
import { events as pubsub } from "./pubsub";

export const eventListeners = () => {
  const areaInput = document.getElementById("filter-area");
  areaInput.addEventListener("input", handleAreaInput);

  const addAreaButton = document.getElementById("add-area");
  addAreaButton.addEventListener("click", handleAddArea);

  const projectInput = document.getElementById("filter-project");
  projectInput.addEventListener("input", handleProjectInput);

  const sidebarElement = document.getElementById("sidebar");
  // console.log(sidebarElement);
  const checkboxElement = sidebarElement.querySelectorAll(
    'input[type="checkbox"]'
  );
  // console.log(checkboxElement);
  checkboxElement.forEach((element) => {
    element.addEventListener("change", handleAreaChecked);
  });
};

function handleAreaInput() {
  const checkboxes = document.getElementById("checkboxes");
  const ul = checkboxes.querySelector("ul");
  const areaInput = document.getElementById("filter-area");
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

function handleAreaChecked(event) {
  if (event.target.checked) {
    // send message to lsManager that an area has been checked and it should change the status of pinned to true
    // use pubsub for this
    // event.target.id;
    // console.log(typeof output);
    pubsub.emit("CheckboxChanged", { id: event.target.id, checked: true });
  } else {
    pubsub.emit("CheckboxChanged", { id: event.target.id, checked: false });
  }
  // console.log(event.target.id);
}

export function filterAreaList() {
  //TODO #4 add the ability to filter by area code prefix when typing e.g "f/" searches for all areas with area code prefix
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
      label.textContent = `${area.areaId.toLowerCase()}/${area.description.toLowerCase()}`;
      label.htmlFor = lowerCaseAreaDescription;
    });
}

import { getAreas, getProjects } from "./lsManager";

export const createElement = (type, parent, id) => {
  const newElement = document.createElement(type);
  if (id) newElement.id = id;
  parent.appendChild(newElement);
  return newElement;
};

const bodyElement = document.querySelector("body");
const containerElement = createElement("div", bodyElement, "container");

export const renderHeader = () => {
  const headerElement = createElement("header", containerElement);
  const projectView = createElement("button", headerElement);
  projectView.type = "button";
  projectView.textContent = "Projects";
  const taskView = createElement("button", headerElement);
  taskView.type = "button";
  taskView.textContent = "Project Actions";
  const noteView = createElement("button", headerElement);
  noteView.type = "button";
  noteView.textContent = "Project Notes";
};

export const renderSidebar = () => {
  const sidebarElement = createElement("div", containerElement, "sidebar");

  const validationMessage = createElement("div", sidebarElement);
  validationMessage.id = "validation-message";

  const input = createElement("input", sidebarElement, "filter-area");
  input.placeholder = "type '/' to search all projects";
  input.pattern = "^[A-Za-z]+/[A-Za-z\\s]+$";
  const addArea = createElement("button", sidebarElement, "add-area");
  addArea.type = "button";
  addArea.textContent = "Add Area";

  const div = createElement("div", sidebarElement, "checkboxes");
  const ul = createElement("ul", div);
  let areas = getAreas();
  //   .sort((a, b) => a.areaId - b.areaId);
  areas.forEach((area) => {
    const li = createElement("li", ul);
    const areaDescription = `${area.areaId}-${area.description
      .split(" ")
      .join("-")}`;
    //TODO #2 set the checkbox checked status based on the pinned status
    const input = createElement("input", li, areaDescription.toLowerCase());
    input.type = "checkbox";
    input.checked = area.pinned;
    const label = createElement("label", li);
    label.textContent = `${area.areaId.toLowerCase()}/${area.slug.toLowerCase()}`;
    label.htmlFor = areaDescription.toLowerCase();
  });
};

export const renderMain = () => {
  const mainElement = createElement("main", containerElement);
  const input = createElement("input", mainElement, "filter-project");
  input.placeholder = "Filter Project";
  const addProject = createElement("button", mainElement);
  addProject.type = "button";
  addProject.textContent = "Add Project";
  const table = createElement("table", mainElement);
  const thead = createElement("thead", table);
  const tr = createElement("tr", thead);
  const tableHeadings = ["Project ID", "Description", "Created"];
  tableHeadings.forEach((item) => {
    const td = createElement("td", tr);
    td.textContent = `${item}`;
  });
  const tbody = createElement("tbody", table);

  let projects = getProjects();

  projects.forEach((project) => {
    const tr = createElement("tr", tbody);
    const projectId = createElement("td", tr);
    projectId.textContent = project.projectId;
    const description = createElement("td", tr);
    description.textContent = project.description;
    description.textContent = `${project.projectId.toLowerCase()}/${project.description.toLowerCase()}`;
    const created = createElement("td", tr);
    created.textContent = project.created;
    tr.appendChild(projectId);
    tr.appendChild(description);
    tr.appendChild(created);
  });
};

export const renderFooter = () => {
  const footerElement = createElement("footer", bodyElement);
  footerElement.textContent = "Chris 2023";
};

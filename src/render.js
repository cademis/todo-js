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
  projectView.innerHTML = "Projects";
  const taskView = createElement("button", headerElement);
  taskView.type = "button";
  taskView.innerHTML = "Project Actions";
  const noteView = createElement("button", headerElement);
  noteView.type = "button";
  noteView.innerHTML = "Project Notes";
};

export const renderSidebar = () => {
  const sidebarElement = createElement("div", containerElement, "sidebar");

  //TODO #10 add the lines below to a separte function
  const input = createElement("input", sidebarElement, "filter-area");
  input.placeholder = "type '/' to search all projects";
  input.pattern = "^[A-Za-z]+/[A-Za-z\\s]+$";
  const addArea = createElement("button", sidebarElement, "add-area");
  addArea.type = "button";
  addArea.innerHTML = "Add Area";

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
  addProject.innerHTML = "Add Project";
  const table = createElement("table", mainElement);
  const thead = createElement("thead", table);
  const tr = createElement("tr", thead);
  const tableHeadings = ["Project ID", "Description", "Created"];
  tableHeadings.forEach((item) => {
    const td = createElement("td", tr);
    td.innerHTML = item;
  });
  const tbody = createElement("tbody", table);

  let projects = getProjects();

  projects.forEach((project) => {
    const tr = createElement("tr", tbody);
    const projectId = createElement("td", tr);
    projectId.innerHTML = project.projectId;
    const description = createElement("td", tr);
    // description.innerHTML = project.description;
    description.innerHTML = `${project.projectId.toLowerCase()}/${project.description.toLowerCase()}`;
    const created = createElement("td", tr);
    created.innerHTML = project.created;
    tr.appendChild(projectId);
    tr.appendChild(description);
    tr.appendChild(created);
  });
};

export const renderFooter = () => {
  const footerElement = createElement("footer", bodyElement);
  footerElement.innerHTML = "Chris 2023";
};

export const createElement = (type, parent, id) => {
  const newElement = document.createElement(type);
  if (id) newElement.id = id;
  parent.appendChild(newElement);
  return newElement;
};

export const getAreas = () => {
  const areas = [
    { areaId: "H6", description: "Health and Fitness" },
    { areaId: "P2", description: "Politics" },
    { areaId: "H9", description: "Holiday Planning" },
  ];

  areas.sort((a, b) => a.areaId.localeCompare(b.areaId));

  return areas;
};

export const getProjects = () => {
  const projects = [
    {
      projectId: "H6-001",
      description: "this is the first project",
      created: "202307120925",
    },
    {
      projectId: "H6-002",
      description: "this is the second project",
      created: "202307120926",
    },
    {
      projectId: "P2-001",
      description: "this is another random project",
      created: "202307120927",
    },
    {
      projectId: "H9-001",
      description: "this is the third project",
      created: "202307120928",
    },
    {
      projectId: "P5-001",
      description: "this is a new project",
      created: "202307120929",
    },
    {
      projectId: "H8-001",
      description: "this is a test project",
      created: "202307120930",
    },
    {
      projectId: "P3-001",
      description: "this is a sample project",
      created: "202307120931",
    },
    {
      projectId: "H7-001",
      description: "this is an experimental project",
      created: "202307120932",
    },
    {
      projectId: "P4-001",
      description: "this is a demo project",
      created: "202307120933",
    },
    {
      projectId: "H10-001",
      description: "this is a new addition project",
      created: "202307120934",
    },
    {
      projectId: "P6-001",
      description: "this is a development project",
      created: "202307120935",
    },
  ];

  projects.sort((a, b) => a.projectId.localeCompare(b.projectId));

  return projects;
};

const bodyElement = document.querySelector("body");
const containerElement = createElement("div", bodyElement, "container");

export const renderHeader = () => {
  const headerElement = createElement("header", containerElement);
  const projectView = createElement("button", headerElement);
  projectView.type = "button";
  projectView.innerHTML = "Projects View";
  const taskView = createElement("button", headerElement);
  taskView.type = "button";
  taskView.innerHTML = "Tasks View";
  const noteView = createElement("button", headerElement);
  noteView.type = "button";
  noteView.innerHTML = "Notes view";
};

export const renderSidebar = () => {
  const sidebarElement = createElement("div", containerElement, "sidebar");

  const input = createElement("input", sidebarElement, "filter-area");
  input.placeholder = "Filter Area";
  const addArea = createElement("button", sidebarElement);
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
    const input = createElement("input", li, areaDescription.toLowerCase());
    input.type = "checkbox";
    const label = createElement("label", li);
    label.textContent = `${area.description} (${area.areaId})`;
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
    description.innerHTML = `${project.description} (${project.projectId})`;
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

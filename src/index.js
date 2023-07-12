import { format } from "date-fns";
import "./style.css";

// const result = format(new Date(), 'yyyyddMMHHmm')

const createElement = (type, parent, id) => {
  const newElement = document.createElement(type);
  if (id) newElement.id = id;
  parent.appendChild(newElement);
  return newElement;
};

const bodyElement = document.querySelector("body");
const containerElement = createElement("div", bodyElement, "container");

export const renderHeader = () => {
  const headerElement = createElement("header", containerElement);
  const createArea = createElement("button", headerElement);
  createArea.type = "button";
  createArea.innerHTML = "Create Area";
  const createProject = createElement("button", headerElement);
  createProject.type = "button";
  createProject.innerHTML = "Create Project";
};

export const renderSidebar = () => {
  const sidebarElement = createElement("div", containerElement, "sidebar");
  const input = createElement("input", sidebarElement);
  input.placeholder = "Search";
};

export const renderMain = () => {
  const mainElement = createElement("main", containerElement);
  const table = createElement("table", mainElement);
  const thead = createElement("thead", table);
  const tr = createElement("tr", thead);
  const tableHeadings = ["Project ID", "Description", "Folder Link"];
  tableHeadings.forEach((item) => {
    const td = createElement("td", tr);
    td.innerHTML = item;
  });
  const tbody = createElement("tbody", table);

  let data = [
    {
      projectId: "H6-001",
      description: "this is the first project",
      folderLink: "H6/002",
    },
    {
      projectId: "H6-002",
      description: "this is the second project",
      folderLink: "H6/002",
    },
    {
      projectId: "P2-001",
      description: "this is another random project",
      folderLink: "P2/001",
    },
    {
      projectId: "H9-001",
      description: "this is the third project",
      folderLink: "H9/001",
    },
    {
      projectId: "P5-001",
      description: "this is a new project",
      folderLink: "P5/001",
    },
    {
      projectId: "H8-001",
      description: "this is a test project",
      folderLink: "H8/001",
    },
    {
      projectId: "P3-001",
      description: "this is a sample project",
      folderLink: "P3/001",
    },
    {
      projectId: "H7-001",
      description: "this is an experimental project",
      folderLink: "H7/001",
    },
    {
      projectId: "P4-001",
      description: "this is a demo project",
      folderLink: "P4/001",
    },
    {
      projectId: "H10-001",
      description: "this is a new addition project",
      folderLink: "H10/001",
    },
    {
      projectId: "P6-001",
      description: "this is a development project",
      folderLink: "P6/001",
    },
  ];
  data.forEach((item) => {
    const tr = createElement("tr", tbody);
    const projectId = createElement("td", tr);
    projectId.innerHTML = item.projectId;
    const description = createElement("td", tr);
    description.innerHTML = item.description;
    const folderLink = createElement("td", tr);
    folderLink.innerHTML = item.folderLink;
    tr.appendChild(projectId);
    tr.appendChild(description);
    tr.appendChild(folderLink);
  });
};

export const renderFooter = () => {
  const footerElement = createElement("footer", bodyElement);
  footerElement.innerHTML = "footer";
};

renderHeader();

renderSidebar();

renderMain();

renderFooter();

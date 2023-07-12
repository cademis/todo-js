import { format } from "date-fns";
import "./style.css"

const result = format(new Date(), 'yyyyddMMHHmm')

const bodyElement = document.querySelector("body")

const createElement = (type, parent, id) => {
    const newElement = document.createElement(type)
    parent.appendChild(newElement)
    return newElement

}

const containerElement = createElement("div",bodyElement)
containerElement.id = "container"

const headerElement = createElement("header", containerElement)
// const headerElement = document.querySelector("header")
headerElement.innerHTML = "Add Project List / Add Project"



const sidebarElement = createElement("div", containerElement)
sidebarElement.id = "sidebar"
sidebarElement.innerHTML = "Select Project List"

const mainElement = createElement("main", containerElement)
mainElement.innerHTML = "Project List"

const footerElement = createElement("footer",bodyElement)
footerElement.innerHTML = "footer"

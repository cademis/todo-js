import { add, format } from "date-fns";
import "./style.css";
import {
  renderHeader,
  renderSidebar,
  renderMain,
  renderFooter,
} from "./render";
import { eventListeners } from "./logic";

// const result = format(new Date(), 'yyyyddMMHHmm')

renderHeader();

renderSidebar();

renderMain();

renderFooter();

eventListeners();

// let sampleObj = {
//   name: "sample name",
//   id: "sample id",
// };

// let sampleArr = [
//   {
//     name: "sample 1 name",
//     id: "sample 1 id",
//   },
//   {
//     name: "sample 2 name",
//     id: "sample 2 id",
//   },
// ];

// localStorage.setItem("newkey", JSON.stringify(sampleArr));

// let output = localStorage.getItem("newkey");

// console.log(JSON.parse(output)[0].name);

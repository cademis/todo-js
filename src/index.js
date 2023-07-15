// import { add, format } from "date-fns";
import "./style.css";
import {
  renderHeader,
  renderSidebar,
  renderMain,
  renderFooter,
} from "./render";
import { eventListeners } from "./logic";
import { getAreas } from "./lsManager";

// const result = format(new Date(), 'yyyyddMMHHmm')

getAreas();

renderHeader();

renderSidebar();

renderMain();

renderFooter();

eventListeners();

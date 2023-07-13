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

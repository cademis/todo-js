import { format } from "date-fns";

const result = format(new Date(), 'yyyyddMMHHmm')

console.log(result)

localStorage.setItem("1", "2")

const first = localStorage.getItem("1")

console.log(first)
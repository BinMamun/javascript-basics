import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import { isWeekend as isSatSun } from "./practice2.js";



const today = dayjs();
console.log(today);
document.querySelector(".js-display-date")
    .innerHTML = today.add(5, "day").format("MMMM D");
document.querySelector(".js-display-date1")
    .innerHTML = today.add(1, "month").format("MMMM D");
document.querySelector(".js-display-date2")
    .innerHTML = today.subtract(1, "month").format("MMMM D");
document.querySelector(".js-display-date3")
    .innerHTML = today.format("dddd, MMMM D");


const date = dayjs().add(6, "day").format("dddd");

isSatSun(date);
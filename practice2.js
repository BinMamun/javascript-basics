export function isWeekend(date) {

    if (date === "Saturday" || date === "Sunday") {
        document.querySelector(".js-display-date4")
            .innerHTML = `Yes! this is a weekend`;
    }
    else {
        document.querySelector(".js-display-date4")
            .innerHTML = `No! this is not a weekend`;
    }
}
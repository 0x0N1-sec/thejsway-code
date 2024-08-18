/*
Number of days in a month
*/
let month = prompt("Tell me what month you are interested in");

switch (month.toLowerCase()) {
    case "january":
        alert(`There are 31 days in ${month}`);
        break;
    case "february":
        alert(`There are 28 days in ${month}`);
        break;
    case "march":
        alert(`There are 31 days in ${month}`);
        break;
    case "april":
        alert(`There are 30 days in ${month}`);
        break;
    case "may":
        alert(`There are 31 days in ${month}`);
        break;
    case "june":
        alert(`There are 30 days in ${month}`);
        break;
    case "july":
        alert(`There are 31 days in ${month}`);
        break;
    case "august":
        alert(`There are 31 days in ${month}`);
        break;
    case "september":
        alert(`There are 30 days in ${month}`);
        break;
    case "october":
        alert(`There are 31 days in ${month}`);
        break;
    case "november":
        alert(`There are 30 days in ${month}`);
        break;
    case "december":
        alert(`There are 31 days in ${month}`);
        break;
    default:
        alert("Month does not exist");
}
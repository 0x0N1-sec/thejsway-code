/*
Show the following day of the week
*/
let day = prompt("What day is it today?");

switch (day.toLowerCase()) {
    case "sunday":
        alert("Then tomorrow is Monday!");
        break;
    case "monday":
        alert("Then tomorrow is Tuesday!");
        break;
    case "tuesday":
        alert("Then tomorrow is Wednesday!");
        break;
    case "wednesday":
        alert("Then tomorrow is Thursday!");
        break;
    case "thursday":
        alert("Then tomorrow is Friday!");
        break;
    case "friday":
        alert("Then tomorrow is Saturday!");
        break;
    case "saturday":
        alert("Then tomorrow is Sunday!");
        break;
    default:
        alert(`Sorry, this is Earth. We don't have ${day}!`);
}
function addDessert() {
    let dessert = "";
    dessert = prompt("Add a dessert you like!");
    const dessertElement = document.createElement("li");
    dessertElement.id = dessert.toLowerCase();
    dessertElement.textContent = dessert;
    document.getElementById("desserts").appendChild(dessertElement);

}

// Product array provided by assignment
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Populate dynamic select options
    const selectElement = document.getElementById("product-select");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Product array's id used for value field
        option.textContent = product.name; // Product array's name field used for display
        selectElement.appendChild(option);
    });

    // Footer copyright year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});
// Dynamic footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const mainNav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional 3 Temple Objects
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-362240.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2000x1125.jpg"
  },
  {
    templeName: "Kinshasa DR Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/kinshasa-temple-2178345-wallpaper.jpg"
  }
];

// Display Cards Function
const templeContainer = document.querySelector("#temple-cards");

function createTempleCard(filteredTemples) {
  templeContainer.innerHTML = ""; // Clear existing content
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("temple-card");

    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    templeContainer.appendChild(card);
  });
}

// Initial Rendering (All Temples)
createTempleCard(temples);

// Filter Event Listeners
const pageHeading = document.querySelector("#heading");

document.querySelector("#home").addEventListener("click", () => {
  pageHeading.textContent = "Home";
  createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  pageHeading.textContent = "Old Temples";
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  createTempleCard(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  pageHeading.textContent = "New Temples";
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  createTempleCard(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  pageHeading.textContent = "Large Temples";
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  createTempleCard(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  pageHeading.textContent = "Small Temples";
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createTempleCard(smallTemples);
});
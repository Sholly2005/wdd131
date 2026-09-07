// Show current year dynamically
const currentYearSpan = document.getElementById("currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Show document last modified date/time
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
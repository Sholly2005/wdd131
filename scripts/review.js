document.addEventListener("DOMContentLoaded", () => {
    // Retrieve current review count from localStorage
    let reviewCount = Number(localStorage.getItem("reviewCount-ls")) || 0;

    // Increment count upon page load
    reviewCount++;

    // Save incremented count back to localStorage
    localStorage.setItem("reviewCount-ls", reviewCount);

    // Display total review count on page
    document.getElementById("review-count").textContent = reviewCount;

    // Footer copyright year and last modified
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});
document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Copyright Year
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Dynamic Last Modified Date
    const modifiedSpan = document.getElementById("lastModified");
    if (modifiedSpan) {
        modifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
    }
});
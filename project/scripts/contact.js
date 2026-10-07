document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const confirmBox = document.getElementById("confirmation-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("fullname").value;
            const subject = document.getElementById("subject").value;

            // Template literal output
            confirmBox.innerHTML = `
                <h3>Thank you, ${name}!</h3>
                <p>Your message regarding <strong>${subject}</strong> has been received. We will get back to you shortly.</p>
            `;
            
            confirmBox.classList.remove("hidden");
            contactForm.reset();
        });
    }
});
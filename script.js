document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        localStorage.setItem("contactName", name);
        localStorage.setItem("contactEmail", email);
        localStorage.setItem("contactMessage", message);
        alert("Thank you! Your details have been saved.");
        contactForm.reset();
    });
});

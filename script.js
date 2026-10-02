const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    form.reset();

    message.textContent = "Thank you! Your message has been received.";
    message.style.color = "#7c3aed";
});


form.addEventListener("reset", function() {

    message.textContent = "";
});


const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
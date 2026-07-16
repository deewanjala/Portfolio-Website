// ================================
// CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();

    const email = this.querySelector('input[type="email"]').value.trim();

    const subject = this.querySelectorAll('input[type="text"]')[1].value.trim();

    const message = this.querySelector("textarea").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        alert("Please fill in all the fields.");

        return;

    }

    if (!validateEmail(email)) {

        alert("Please enter a valid email address.");

        return;

    }

    alert("Thank you! Your message is ready to be sent.");

    contactForm.reset();

});

// ================================
// EMAIL VALIDATION
// ================================

function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}
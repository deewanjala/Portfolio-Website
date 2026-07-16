// ============================
// Typing Animation
// ============================

const words = [
    "Data Analyst",
    "AI Enthusiast",
    "Public Health Researcher"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ============================
// Animated Counters
// ============================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = Number(counter.dataset.target);

                let count = 0;

                const updateCounter = () => {

                    const increment = Math.max(1, Math.ceil(target / 100));

                    if (count < target) {

                        count += increment;

                        if (count > target) count = target;

                        counter.innerText = count;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(counter => observer.observe(counter));

}
// ============================
// DARK MODE
// ============================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.textContent="☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeToggle.textContent="🌙";

    }

});
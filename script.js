// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// CLOSE MENU AFTER CLICKING LINK
// ===============================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {

    observer.observe(section);

});
// ===============================
// COPY EMAIL ADDRESS
// ===============================

const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", async () => {

    const email = "pixelforgestudio356@gmail.com";

    try {
        await navigator.clipboard.writeText(email);

        emailBtn.textContent = "Email Copied ✓";

        setTimeout(() => {
            emailBtn.textContent = "Email Me";
        }, 2000);

    } catch (error) {

        alert("My email: " + email);

    }

});
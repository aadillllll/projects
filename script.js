// Contact button interaction
const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

contactBtn.addEventListener("click", () => {
    contactMessage.textContent =
        "Thanks for reaching out! I will get back to you soon.";
});

// Theme toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Show / Hide skills
const toggleSkillsBtn = document.getElementById("toggleSkills");
const skillsList = document.getElementById("skillsList");

toggleSkillsBtn.addEventListener("click", () => {
    skillsList.style.display =
        skillsList.style.display === "none" ? "block" : "none";
});

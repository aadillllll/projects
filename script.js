const contactBtn = document.getElementById("contactBtn");
const contactMessage = document.getElementById("contactMessage");

contactBtn.addEventListener("click", () => {
    contactMessage.textContent = "Thanks for reaching out! I will get back to you soon.";
});

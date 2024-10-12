const reminder = document.getElementById("reminder");
const sections = document.getElementById("sections");
const reminderClose = document.getElementById("reminder-close");

reminderClose.addEventListener('click', function () {
  reminder.style.display = "none";
  sections.style.paddingBottom = "8.5em";
});

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;
document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Buenos días / Good morning!";
  } else if (hour < 18) {
    greeting.textContent = "Buenas tardes / Good afternoon!";
  } else {
    greeting.textContent = "Buenas noches / Good evening!";
  }
});

  const btn = document.getElementById("toggleExperience");
  const experiencia = document.getElementById("experiencia");

  btn.addEventListener("click", function () {
    if (experiencia.style.display === "none") {
      experiencia.style.display = "block";
    } else {
      experiencia.style.display = "none";
    }
  });

  const themeBtn = document.getElementById("toggleTheme");

  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });


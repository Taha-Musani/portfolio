let skill_click = document.querySelector(".skill-click");
let education_click = document.querySelector(".education-click");
let experience_click = document.querySelector(".experience-click");
let skill_div = document.querySelector(".skill");
let education_div = document.querySelector(".education");
let experience_div = document.querySelector(".experience");

skill_click.addEventListener("click", () => {
  skill_div.style.display = "block";
  education_div.style.display = "none";
  experience_div.style.display = "none";
  skill_click.classList.add("active-link");
  education_click.classList.remove("active-link");
  experience_click.classList.remove("active-link");
});

education_click.addEventListener("click", () => {
  education_div.style.display = "block";
  skill_div.style.display = "none";
  experience_div.style.display = "none";
  education_click.classList.add("active-link");
  skill_click.classList.remove("active-link");
  experience_click.classList.remove("active-link");
});

experience_click.addEventListener("click", () => {
    experience_div.style.display = "block"
    skill_div.style.display = "none";
    education_div.style.display = "none";
    experience_click.classList.add("active-link");
    skill_click.classList.remove("active-link");
    education_click.classList.remove("active-link");
});

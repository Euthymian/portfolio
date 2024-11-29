'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * add project
 */

let addProjectButton = document.getElementById("add_project_button");
let addProjectForm = document.getElementById("add_project_form");
addProjectButton.addEventListener("click", function () {
  if (addProjectForm.style.display === "block") {
    addProjectForm.style.display = "none";
  }
  else {
    addProjectForm.style.display = "block";
  }
});

// let submitProjectButton = document.getElementById("add_project_submit");
// submitProjectButton.addEventListener("click", function () {
//   let projectName = document.getElementById("project_name").value;
//   let projectDescription = document.getElementById("project_description").value;
//   let projectImage = document.getElementById("project_image").value;
//   let projectLink = document.getElementById("project_link").value;

//   let project = {
//     name: projectName,
//     description: projectDescription,
//     image: projectImage,
//     link: projectLink
//   };

//   let projects = JSON.parse(localStorage.getItem("projects"));
//   if (projects == null) {
//     projects = [];
//   }
//   projects.push(project);
//   localStorage.setItem("projects", JSON.stringify(projects));
//   addProjectForm.style.display = "none";
//   location.reload();
// });
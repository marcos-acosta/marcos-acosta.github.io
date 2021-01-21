$(document).ready(function() {
  $("#homeButton").on("click", () => {
    $("#projectButton").removeClass("active");
    $("#homeButton").addClass("active");
    let projects = document.getElementById("aboutMeContainer")
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
  $("#projectButton").on("click", () => {
    $("#homeButton").removeClass("active");
    $("#projectButton").addClass("active");
    let projects = document.getElementById("projects")
    projects.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
});
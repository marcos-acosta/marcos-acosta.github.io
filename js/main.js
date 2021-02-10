$(document).ready(function() {
  setTimeout(() => {
    txt = 'Hi! I\'m Marcos.'
    speed = 70
    typeWriter("name", txt, speed);
    typeWriter("nameShadow", txt, speed);
    setTimeout(() => {
      $("#mySite").fadeIn();
    }, txt.length * 70 + 500);
  }, 1000)
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

function typeWriter(id_, text_, speed_) {
  let i = 0;
  let txt = text_;
  let speed = speed_;

  function write() {
    if (i < txt.length) {
      document.getElementById(id_).innerHTML += txt.charAt(i);
      i++;
      setTimeout(write, speed);
    }
  }

  write();
}
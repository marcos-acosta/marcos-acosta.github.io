var page = 0;

var pages = ["home", "projects", "resume", "misc"];

$(document).ready(() => {
  $("#helloGoogle").modal('show');
  $(".menuItem").on("click", (e) => {
    updatePage(e.target.id);
  });
  $("#dismissGoogle").on("click", () => {
    $("#helloGoogle").modal('hide');
  });
});

function updatePage(id) {
  newPage = pages.indexOf(id.slice(0, id.length - 4));
  updateLinkText(newPage);
  updatePageBody(newPage);
  page = newPage;
}

function updatePageBody(newPage) {
  let oldBody = $(`#${pages[page]}Body`);
  let newBody = $(`#${pages[newPage]}Body`);
  oldBody.fadeOut(250, () => {
    newBody.fadeIn(250);
  });
}

function updateLinkText(newPage) {
  let oldLink = $(`#${pages[page]}Link`);
  oldLink.text(oldLink.text().slice(2));
  for (let i = 0; i < pages.length; i++) {
    let link = $(`#${pages[i]}Link`);
    if (i == newPage) {
      link.text(`➔ ${link.text()}`);
      link.addClass('bold')
      link.removeClass('pointerCursor')
    } else {
      link.removeClass('bold')
      link.addClass('pointerCursor')
    }
  }
}
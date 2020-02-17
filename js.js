const track = document.querySelector(".track");
let trackArray = [];
function number() {
  for (let i = 0; i <= 5000; i++) {
    (function(printrandon) {
      setTimeout(function() {
        let number = Math.floor(Math.random() * 32);
        trackArray.unshift(
          `<div class="bar" data-bar="` +
            number +
            `" title="` +
            number +
            `"></div>`
        );
        // track.innerHTML += trackArray.join("");
        if (trackArray.length >= 41) {
          trackArray.pop();
        }
        addbar();
      }, printrandon * 1000);
    })(i);
  }
}
function addbar() {
  if (trackArray.length >= 0) {
    track.innerHTML = trackArray.join("");
  }
}
document.querySelector(".button").addEventListener("click", number);

const objDiv = document.querySelector(".barcontainer");
objDiv.scrollLeft = objDiv.scrollWidth;

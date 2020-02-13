const track = document.querySelector(".track");
let trackArray = [];
let number = function() {
  for (let i = 0; i <= 10000; i++) {
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
        if (trackArray.length >= 41) {
          trackArray.pop();
        }
        addbar();
      }, printrandon * 1000);
    })(i);
  }
};
function addbar() {
  if (trackArray.length >= 0) {
    track.innerHTML = trackArray.join("");
  }
}
const button = document.querySelector(".button");
button.addEventListener("click", (e = number));

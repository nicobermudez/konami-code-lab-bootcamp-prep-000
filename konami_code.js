const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  
// Keep track of index outside of the event handler.
let index = 0;

var listen = document.body;
listen.addEventListener("keydown", onKeyDownHandler,  true);

function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
}


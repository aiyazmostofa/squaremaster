let a = 0;
let b = 0;
let answer = "";
let red = false;

function input(key) {
  if (key == -1) {
    enter();
  } else if (key == -2) {
    backspace();
  } else {
    type(key);
  }
  render();
}

function enter() {
  if (a * b == Number(answer)) {
    correct();
  } else {
    wrong();
  }
  answer = "";
}

function backspace() {
  if (answer.length <= 0) {
    return;
  }

  answer = answer.substring(1);
}

function type(number) {
  if (answer.length >= 10) {
    return;
  }

  answer = number + answer;
}

function correct() {
  a = Math.floor(Math.random() * 90) + 10;
  b = a;
  red = false;
}

function wrong() {
  red = true;
}

function render() {
  let element = document.getElementById("question");
  element.innerHTML = a + "&times;" + b;

  if (red) {
    if (!element.classList.contains("text-red-400")) element.classList.add("text-red-400");
  } else {
    if (element.classList.contains("text-red-400")) element.classList.remove("text-red-400");
  }

  element = document.getElementById("answer");
  if (answer == "") {
    element.innerHTML = "&nbsp;";
  } else {
    element.innerHTML = answer;
  }
}

function init() {
  map = {
    1: () => type(1),
    2: () => type(2),
    3: () => type(3),
    4: () => type(4),
    5: () => type(5),
    6: () => type(6),
    7: () => type(7),
    8: () => type(8),
    9: () => type(9),
    0: () => type(0),
    Enter: () => enter(),
    Backspace: () => backspace,
  };

  document.addEventListener(
    "keydown",
    (event) => {
      let name = event.key;
      if (map[name]) {
        map[name]();
        render();
      }
    },
    false
  );

  correct();
  render();
}

init();

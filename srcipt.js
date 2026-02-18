let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let nbaImg = document.querySelector(".nba-img");
let h1 = document.querySelector(".heading");
button.onclick = function () {
  let answer1 = input1.value;
  console.log(answer1);
  let answer2 = input2.value;

  console.log(answer2);

  console.log("button check");

  if (answer1 === "Bigs" && answer2 === "3-pointers") {
    nbaImg.src =
      "Wemby.jpg";
    h1.innerHTML = "Your NBA player is Victor Wembanyama";
  } else if (answer1 === "Guards" && answer2 === "3-pointers") {
    nbaImg.src =
      "Curry image.jpg";
    h1.innerHTML = "Your NBA player is Stephen Curry";
  }
  if (answer1 === "Guards" && answer2 === "Dunks") {
    nbaImg.src =
      "Westbrook.jpg";
    h1.innerHTML = "Your NBA player is Russell Westbrook";
  } else if (answer1 === "Guards" && answer2 === "Mid-Range") {
    nbaImg.src =
      "Demar1.jpg";
    h1.innerHTML = "Your NBA player is Demar DeRozan";
  } else if (answer1 === "Bigs" && answer2 === "Mid-Range") {
    nbaImg.src =
      "https://pbs.twimg.com/media/FsbSvANaMAEp6Md.jpg";
    h1.innerHTML = "Your NBA player is Kevin Durant";
  } else if (answer1 === "Bigs" && answer2 === "Dunks") {
    nbaImg.src =
      "https://www.freep.com/gcdn/-mm-/93ec0537e21d15b92d4c2ad82f324ca9cf31a500/c=0-0-1992-2656/local/-/media/2018/02/14/DetroitFreeP/DetroitFreePress/636542452102242014-GTY-918380094.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp";
    h1.innerHTML = "Your NBA player is Blake Griffin";
  }
};

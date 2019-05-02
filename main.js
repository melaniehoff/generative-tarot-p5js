
let cards = [
// structure:---->  console.log(cards[0].card); = the fool
  {
    card: "The Fool",
    website: "http://artfiles.rutgers.edu/~maiwaldt@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/2fsGq6inE",
    interaction: "🐁"
  },
  {
    card: "The Magician",
    website: "http://artfiles.rutgers.edu/~manansala@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/tXz9E7jd0",
    interaction: "🐁, click, A, B, C, D, E"
  },
  {
    card: "The High Priestess",
    website: "http://artfiles.rutgers.edu/~farah@art.rutgers.edu/tarot",
    sketch: "https://editor.p5js.org/melaniehoff/embed/cbjTgdqFM",
    interaction: "click"
  },
  {
    card: "The Empress",
    website: "http://artfiles.rutgers.edu/~feerrar@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/pKXvxBY8f",
    interaction: "click"
  },
  {
    card: "The Emperor",
    website: "", //TODO
    sketch: "https://editor.p5js.org/melaniehoff/embed/FUKeNgxvC",
    interaction: "click"
  },
  {
    card: "The Hierophant", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/OQ7N_j6H-",
    interaction: ""
  },
  {
    card: "The Lovers", //TODO
    website: "http://www.aeclectic.net/tarot/learn/meanings/lovers.shtml",
    sketch: "https://editor.p5js.org/melaniehoff/embed/x_SJWRVU9",
    interaction: ""
  },
  {
    card: "The Chariot",
    website: "http://artfiles.rutgers.edu/~macneill@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/OgyCbc4-z",
    interaction: "🐁"
  },
  {
    card: "Strength",
    website: "http://artfiles.rutgers.edu/~wangy@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/r3eekK1O0",
    interaction: "🐁, click+hold"
  },
  {
    card: "The Hermit", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/54F1vJ0ZK",
    interaction: ""
  },
  {
    card: "Wheel of Fortune", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/NnQcPsqoS",
    interaction: ""
  },
  {
    card: "Justice",
    website: "http://artfiles.rutgers.edu/~finn@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/8gZLw_VYr",
    interaction: "🐁, click"
  },
  {
    card: "The Hanged Man",
    website: "http://artfiles.rutgers.edu/~quayenortey@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/BwG_og7ui",
    interaction: "click"
  },
  {
    card: "Death",
    website: "http://artfiles.rutgers.edu/~wangy@art.rutgers.edu/tarot/death",
    sketch: "https://editor.p5js.org/yw611@scarletmail.rutgers.edu/embed/ps8iE904u",
    interaction: "🐁"
  },
  {
    card: "Temperance", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/JLT7WHVLC",
    interaction: ""
  },
  {
    card: "The Devil", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/MrVK5mCU5",
    interaction: ""
  },
  {
    card: "The Tower",
    website: "http://artfiles.rutgers.edu/~lozano@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/GFKaSQWhC",
    interaction: "🐁, click, key"
  },
  {
    card: "The Star",
    website: "http://artfiles.rutgers.edu/~mi@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/wS2zJaZXC",
    interaction: "🐁, key"
  },
  {
    card: "The Moon",
    website: "http://artfiles.rutgers.edu/~leonard@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/9HQ_TLpGg",
    interaction: "🐁, click, key"
  },
  {
    card: "The Sun",
    website: "http://artfiles.rutgers.edu/~espinoza@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/v1YzgP6-u",
    interaction: ""
  },
  {
    card: "Judgement", //TODO
    website: "",
    sketch: "https://editor.p5js.org/valnicloz/embed/Km8e1aVYI",
    interaction: ""
  },
  {
    card: "The World",
    website: "http://artfiles.rutgers.edu/~noor@art.rutgers.edu/tarot",
    sketch: "https://editor.p5js.org/jsn65/embed/DL8dGzrOX",
    interaction: "🐁"
  }
];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// Shuffle array
const shuffledCards = shuffle(cards);

// Get sub-array of first n elements after shuffled
let shuffledThree = shuffledCards.slice(0, 3);
console.log(shuffledThree);


function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}

console.log(shuffledThree[0].card);
console.log(shuffledThree[1].card);
console.log(shuffledThree[2].card);

loadIframe("one", shuffledThree[0].sketch);
loadIframe("two", shuffledThree[1].sketch);
loadIframe("three", shuffledThree[2].sketch);



function loader() {
  setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("pulled-cards").style.display = "flex";
	document.getElementById("ppf").style.display = "flex";
	document.getElementById("students").style.display = "block";
}

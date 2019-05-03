$( document ).ready(function() {
    console.log( "ready!" );

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
    interaction: "<span>🐁 <img class='click' src='click.png'> A B C D E</span>"
  },
  {
    card: "The High Priestess",
    website: "http://artfiles.rutgers.edu/~farah@art.rutgers.edu/tarot",
    sketch: "https://editor.p5js.org/melaniehoff/embed/cbjTgdqFM",
    interaction: "<img class='click' src='click.png'>"
  },
  {
    card: "The Empress",
    website: "http://artfiles.rutgers.edu/~feerrar@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/pKXvxBY8f",
    interaction: "<img class='click' src='click.png'>"
  },
  {
    card: "The Emperor",
    website: "", //TODO
    sketch: "https://editor.p5js.org/melaniehoff/embed/FUKeNgxvC",
    interaction: "<img class='click' src='click.png'>"
  },
  {
    card: "The Hierophant", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/OQ7N_j6H-",
    interaction: '\u00A0'
  },
  {
    card: "The Lovers", //TODO
    website: "http://www.aeclectic.net/tarot/learn/meanings/lovers.shtml",
    sketch: "https://editor.p5js.org/melaniehoff/embed/x_SJWRVU9",
    interaction: '\u00A0'
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
    interaction: "<span>🐁 <img class='click' src='click.png'></span>"
  },
  {
    card: "The Hermit", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/54F1vJ0ZK",
    interaction: '\u00A0'
  },
  {
    card: "Wheel of Fortune", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/NnQcPsqoS",
    interaction: '\u00A0'
  },
  {
    card: "Justice",
    website: "http://artfiles.rutgers.edu/~finn@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/8gZLw_VYr",
    interaction: "<span>🐁 <img class='click' src='click.png'></span>"
  },
  {
    card: "The Hanged Man",
    website: "http://artfiles.rutgers.edu/~quayenortey@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/BwG_og7ui",
    interaction: "<img class='click' src='click.png'>"
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
    interaction: '\u00A0'
  },
  {
    card: "The Devil", //TODO
    website: "",
    sketch: "https://editor.p5js.org/melaniehoff/embed/MrVK5mCU5",
    interaction: '\u00A0'
  },
  {
    card: "The Tower",
    website: "http://artfiles.rutgers.edu/~lozano@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/GFKaSQWhC",
    interaction: "<span>🐁 <img class='click' src='click.png'> <img class='click' src='key.png'></span>"
  },
  {
    card: "The Star",
    website: "http://artfiles.rutgers.edu/~mi@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/wS2zJaZXC",
    interaction: "<span>🐁 <img class='click' src='key.png'></span>"
  },
  {
    card: "The Moon",
    website: "http://artfiles.rutgers.edu/~leonard@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/9HQ_TLpGg",
    interaction: "<span>🐁 <img class='click' src='click.png'> <img class='click' src='key.png'></span>"
  },
  {
    card: "The Sun",
    website: "http://artfiles.rutgers.edu/~espinoza@art.rutgers.edu/tarot/",
    sketch: "https://editor.p5js.org/melaniehoff/embed/v1YzgP6-u",
    interaction: '\u00A0'
  },
  {
    card: "Judgement", //TODO
    website: "",
    sketch: "https://editor.p5js.org/valnicloz/embed/Km8e1aVYI",
    interaction: '\u00A0'
  },
  {
    card: "The World",
    website: "http://artfiles.rutgers.edu/~noor@art.rutgers.edu/tarot",
    sketch: "https://editor.p5js.org/melaniehoff/embed/oUL56jqc1",
    interaction: "🐁"
  }
];

// Shuffle array
const shuffledCards = shuffle(cards);

// Get sub-array of first 3 elements after shuffled
let shuffledThree = shuffledCards.slice(0, 3);

//Print the three pulled cards
// console.log(shuffledThree);
console.log(shuffledThree[0].card);
console.log(shuffledThree[1].card);
console.log(shuffledThree[2].card);

//website
$("#title-1").attr("href", shuffledThree[0].website);
$("#title-1").text(shuffledThree[0].card);

$("#title-2").attr("href", shuffledThree[1].website);
$("#title-2").text(shuffledThree[1].card);

$("#title-3").attr("href", shuffledThree[2].website);
$("#title-3").text(shuffledThree[2].card);

//interaction
$("#interaction-1").html(shuffledThree[0].interaction);

$("#interaction-2").html(shuffledThree[1].interaction);

$("#interaction-3").html(shuffledThree[2].interaction);

//Show the iframes
loadIframe("one", shuffledThree[0].sketch);
loadIframe("two", shuffledThree[1].sketch);
loadIframe("three", shuffledThree[2].sketch);





}); //END OF DOC READY




//FUNCTIONS

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

function loader() {
  setTimeout(showPage, 500);
}

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("pulled-cards").style.display = "flex";
}


$("#scrollLink").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#bottom").offset().top
    }, 800);
});

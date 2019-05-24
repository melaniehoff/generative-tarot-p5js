


    var cards = [
    // structure:---->  console.log(cards[0].card); = the fool
    {
      card: "The Fool",
      name: "Kirsten Maiwaldt",
      website: "http://artfiles.rutgers.edu/~maiwaldt@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/2fsGq6inE",
      code: "https://editor.p5js.org/melaniehoff/sketches/2fsGq6inE",
      interaction: "<img class='click' src='assets/mouse.png'>",
      interactionText: "Move mouse"
    },
    {
      card: "The Magician",
      name: "Marinelle Manansala",
      website: "http://artfiles.rutgers.edu/~manansala@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/tXz9E7jd0",
      code: "https://editor.p5js.org/melaniehoff/sketches/tXz9E7jd0",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'> A B C D E",
      interactionText: "Move mouse, click, press A, B, C, D, E"
    },
    {
      card: "The High Priestess",
      name: "Danielle Farah",
      website: "http://artfiles.rutgers.edu/~farah@art.rutgers.edu/tarot",
      sketch: "https://editor.p5js.org/melaniehoff/embed/cbjTgdqFM",
      code: "https://editor.p5js.org/melaniehoff/sketches/cbjTgdqFM",
      interaction: "<img class='click' src='assets/click.png'>",
      interactionText: "Click"
    },
    {
      card: "The Empress",
      name: "Elyssa Feerrar",
      website: "http://artfiles.rutgers.edu/~feerrar@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/pKXvxBY8f",
      code: "https://editor.p5js.org/melaniehoff/sketches/pKXvxBY8f",
      interaction: "<img class='click' src='assets/click.png'>",
      interactionText: "Click"
    },
    {
      card: "The Emperor",
      name: "Elyssa Feerrar",
      website: "http://artfiles.rutgers.edu/~feerrar@art.rutgers.edu/tarot%202/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/FUKeNgxvC",
      code: "https://editor.p5js.org/melaniehoff/sketches/FUKeNgxvC",
      interaction: "<img class='click' src='assets/click.png'>",
      interactionText: "Click"
    },
    {
      card: "The Hierophant", //TODO
      name: "MH",
      website: "https://melanie-hoff.com/tarot/hierophant/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/MtfvWmYz6",
      code: "https://editor.p5js.org/melaniehoff/sketches/MtfvWmYz6",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'>",
      interactionText: "Move mouse to play pong, also click"
    },
    {
      card: "The Lovers", //TODO
      name: "Alexandria Eisen",
      website: "https://melanie-hoff.com/tarot/lovers",
      sketch: "https://editor.p5js.org/melaniehoff/embed/poq8yuXSq",
      code: "https://editor.p5js.org/melaniehoff/sketches/poq8yuXSq",
      interaction: "<span><img class='click' src='assets/click.png'> R</span>",
      interactionText: "Click, press R"
    },
    {
      card: "The Chariot",
      name: "Jenna MacNeill",
      website: "http://artfiles.rutgers.edu/~macneill@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/OgyCbc4-z",
      code: "https://editor.p5js.org/melaniehoff/sketches/OgyCbc4-z",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'>",
      interactionText: "Move mouse, click"
    },
    {
      card: "Strength",
      name: "Yuchao Wang",
      website: "http://artfiles.rutgers.edu/~wangy@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/r3eekK1O0",
      code: "https://editor.p5js.org/melaniehoff/sketches/r3eekK1O0",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'>",
      interactionText: "Click + hold"
    },
    {
      card: "The Hermit", //TODO -- fred's https://editor.p5js.org/fredkq1/sketches/AUvwFDPvy
      name: "Fred Quayenortey",
      website: "http://artfiles.rutgers.edu/~quayenortey@art.rutgers.edu/tarot_2/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/5h8TKriVb",
      code: "https://editor.p5js.org/melaniehoff/sketches/5h8TKriVb",
      interaction: "<img class='click' src='assets/click.png'> [SPACE] E F",
      interactionText: "Click, press spacebar, E key, F key"
    },
    {
      card: "Wheel of Fortune", //TODO
      name: "MH",
      website: "https://melanie-hoff.com/tarot/wheeloffortune",
      sketch: "https://editor.p5js.org/melaniehoff/embed/H7E65rqDb",
      code: "https://editor.p5js.org/melaniehoff/sketches/H7E65rqDb",
      interaction: "<img class='click' src='assets/mouse.png'>",
      interactionText: "Move mouse"
    },
    {
      card: "Justice",
      name: "Conor Fin",
      website: "http://artfiles.rutgers.edu/~finn@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/8gZLw_VYr",
      code: "https://editor.p5js.org/melaniehoff/sketches/8gZLw_VYr",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'>",
      interactionText: "Move mouse, click"
    },
    {
      card: "The Hanged Man",
      name: "Fred Quayenortey",
      website: "http://artfiles.rutgers.edu/~quayenortey@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/C2BJdFo9_",
      code: "https://editor.p5js.org/melaniehoff/sketches/C2BJdFo9_",
      interaction: "<img class='click' src='assets/click.png'>",
      interactionText: "Move mouse, click + listen"
    },
    {
      card: "Death",
      name: "Yuchao Wang",
      website: "http://artfiles.rutgers.edu/~wangy@art.rutgers.edu/tarot/death",
      sketch: "https://editor.p5js.org/melaniehoff/embed/PZ0GnLKyT",
      code: "https://editor.p5js.org/melaniehoff/sketches/PZ0GnLKyT",
      interaction: "<img class='click' src='assets/mouse.png'>",
      interactionText: "Move mouse"
    },
    {
      card: "Temperance", //TODO
      name: "MH",
      website: "https://melanie-hoff.com/tarot/temperence/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/ml_VPt1xc",
      code: "https://editor.p5js.org/melaniehoff/sketches/ml_VPt1xc",
      interaction: "<img class='click' src='assets/click.png'>",
      interactionText: "Click"
    },
    {
      card: "The Devil", //TODO
      name: "MH",
      website: "https://melanie-hoff.com/tarot/devil",
      sketch: "https://editor.p5js.org/melaniehoff/embed/bbs_vgFxZ",
      code: "https://editor.p5js.org/melaniehoff/sketches/bbs_vgFxZ",
      interaction: "<span><img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'></span>",
      interactionText: "Move mouse, click, click + hold"
    },
    {
      card: "The Tower",
      name: "Valerie Lozano",
      website: "http://artfiles.rutgers.edu/~lozano@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/GFKaSQWhC",
      code: "https://editor.p5js.org/melaniehoff/sketches/GFKaSQWhC",
      interaction: "<img class='click' src='assets/key.png'>",
      interactionText: "Press any key"
    },
    {
      card: "The Star",
      name: "Sherry Mi",
      website: "http://artfiles.rutgers.edu/~mi@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/wS2zJaZXC",
      code: "https://editor.p5js.org/melaniehoff/sketches/wS2zJaZXC",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/key.png'>",
      interactionText: "Move mouse, press any key"
    },
    {
      card: "The Moon",
      name: "Sheila Leonard",
      website: "http://artfiles.rutgers.edu/~leonard@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/9HQ_TLpGg",
      code: "https://editor.p5js.org/melaniehoff/sketches/9HQ_TLpGg",
      interaction: "<img class='click' src='assets/mouse.png'> <img class='click' src='assets/click.png'> <img class='click' src='assets/key.png'>",
      interactionText: "Move mouse"
    },
    {
      card: "The Sun",
      name: "Gilbert Espinoza",
      website: "http://artfiles.rutgers.edu/~espinoza@art.rutgers.edu/tarot/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/v1YzgP6-u",
      code: "https://editor.p5js.org/melaniehoff/sketches/v1YzgP6-u",
      interaction: "<img class='click' src='assets/space.png'>",
      interactionText: ""
    },
    {
      card: "Judgement", //TODO copy to my p5
      name: "Valerie Lozano",
      website: "https://melanie-hoff.com/tarot/judgement/",
      sketch: "https://editor.p5js.org/melaniehoff/embed/LiEPr44Id",
      code: "https://editor.p5js.org/melaniehoff/sketches/LiEPr44Id",
      interaction: "<img class='click' src='assets/space.png'>",
      interactionText: ""
    },
    {
      card: "The World",
      name: "Jamie Noor",
      website: "http://artfiles.rutgers.edu/~noor@art.rutgers.edu/tarot",
      sketch: "https://editor.p5js.org/melaniehoff/embed/oUL56jqc1",
      code: "https://editor.p5js.org/melaniehoff/sketches/oUL56jqc1",
      interaction: "<img class='click' src='assets/mouse.png'>",
      interactionText: "Move mouse"
    }
    ];

displayCards(cards);



//FUNCTIONS

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 alert("Generative Tarot is MUCH better viewed on desktop.\nYou'll be missing out on the card interactions.\nContinue anyway?");

}


function displayCards(cards) {
  console.log("Check out this console log!");

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
  $("#code-1").attr("href", shuffledThree[0].code);
  $("#code-1").text(shuffledThree[0].name);

  $("#title-2").attr("href", shuffledThree[1].website);
  $("#title-2").text(shuffledThree[1].card);
  $("#code-2").attr("href", shuffledThree[1].code);
  $("#code-2").text(shuffledThree[1].name);

  $("#title-3").attr("href", shuffledThree[2].website);
  $("#title-3").text(shuffledThree[2].card);
  $("#code-3").attr("href", shuffledThree[2].code);
  $("#code-3").text(shuffledThree[2].name);

  //interaction
  $("#interaction-1").html(shuffledThree[0].interaction);

  $("#interaction-2").html(shuffledThree[1].interaction);

  $("#interaction-3").html(shuffledThree[2].interaction);

  $("#interactionText-1").html(shuffledThree[0].interactionText);

  $("#interactionText-2").html(shuffledThree[1].interactionText);

  $("#interactionText-3").html(shuffledThree[2].interactionText);

  //Show the iframes
  loadIframe("one", shuffledThree[0].sketch);
  loadIframe("two", shuffledThree[1].sketch);
  loadIframe("three", shuffledThree[2].sketch);
  //
  return

}



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

function pullAgain() {
  hidePage();
  console.log("should be displaying");
  setTimeout(showPageAgain, 2000);
    console.log("should be displaying after 2 secs");
}

function loadIframe(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {
        $iframe.attr('src',url);
        return false;
    }
    return true;
}

function loader() {
  setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("pulled-cards").style.display = "flex";
  document.getElementById("top-buttons").style.display = "block";
  document.getElementById("bottom-container").style.display = "flex";
}


function showPageAgain() {
  displayCards(cards);
  showPage();
}

function hidePage() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("pulled-cards").style.display = "none";
  document.getElementById("top-buttons").style.display = "none";
}



$("#scrollLink").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#info-about").offset().top
    }, 800);
});

// $("#scroll-exercise").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#info-exercise").offset().top
//     }, 800);
// });

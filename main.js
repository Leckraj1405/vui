const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  texts.appendChild(p);
  var scrollingBox = document.getElementById("scrollbox");
  scrollingBox.scrollTop = scrollingBox.scrollHeight;

  if (e.results[0].isFinal) {
    if (text.includes("hello") || text.includes("hi")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Hey there! How can I assist you for HTML?";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My name is HTML beginner guide";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      textToSpeech(p.innerText);
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
    }

    if (text.includes("open HTML videos")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube";
      textToSpeech(p.innerText);
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/results?search_query=html");
    }
    if (text.includes("define HTML") || text.includes("what is HTML")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (
      text.includes("open HTML documentation") ||
      text.includes("documentation")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening html documentation";
      window.open("https://developer.mozilla.org/en-US/docs/Web/HTML");
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (
      text.includes("what are HTML heading") ||
      text.includes("HTML heading")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "HTML headings are pre-defined text styles, there are 6 heading types, ranging from H1 to H6, where H1 being the largest heading";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML basics")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The basic includes headings, doc types, tags, elements, and CSS for styling, and JavaScript for functions.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("define HTML body")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "It is an element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML element")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "An HTML element is defined by a start tag, some content, and an end tag <tag>content here</tag>";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("where to run HTML files")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "HTML files can be opened for viewing on web browsers such as Google Chrome, Firefox, and Edge";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML body section")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The body sections is where all the content that the user types goes in. All codes are present in the body section";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("what is an HTML ID attribute")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("difference between class and ID")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML form")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML form attributes")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "HTML form attributes includes the Action attribute, which defines the actions to be performed. The target attribute is where the actions will be performed, and the method attribute is either POST or GET.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML JavaScript")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The HTML <script> tag is used to define a client-side script (JavaScript). The <script> element either contains script statements, or it points to a script file through the src attribute.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("HTML hyperlinks")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText =
        "The HTML <a> tag defines a hyperlink. It has the following syntax: <a href=''> link text</a> The most important attribute of the 'a' element is the href attribute, which indicates the link's destination.The link text is the part that will be visible to the reader. Clicking on the link text, will send the reader to the specified URL address.";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }
    if (text.includes("thank you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My pleasure";
      textToSpeech(p.innerText);
      texts.appendChild(p);
    }

    var objDiv = document.getElementById("scrollbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    p = document.createElement("p");
  }

  console.log(e);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
var muted = 0;

function textToSpeech(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;

  if (muted == 0) {
    utterance.volume = 1;
  } else if (muted == 1) {
    utterance.volume = 0;
  }
  speechSynthesis.speak(utterance);
}

function stopSpeech() {
  recognition.stop();
  window.speechSynthesis.cancel();
}

function playSpeech() {
  recognition.start();
}

function mute() {
  if (muted == 0) {
    stopSpeech();
    muted = 1;
    document.getElementById("muteIcon").classList = "fas fa-volume-mute fa-2x";
  } else if (muted == 1) {
    muted = 0;
    document.getElementById("muteIcon").classList = "fas fa-volume-up fa-2x";
  }
}

function openHelp() {
  window.open("help.html");
}

function goBack() {
  window.close();
}

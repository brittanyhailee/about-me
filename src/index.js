function openWindow(window) {
    console.log(window)
    var div = document.getElementById(window);

   if (div.style.display === "none") {
    div.style.display = "block";
      // Programmatically focus first button inside window if desired:
        if (window === "passions-window") {
            const firstButton = document.getElementById("title-box1");
            if (firstButton) {
                firstButton.focus();
            }
        }
    } else {
        div.style.display = "none";
    }
      if (window === "interests-window") {
            const firstButton = document.getElementById("interest-1");
            if (firstButton) {
                firstButton.focus();
            }
        }
}

function closeWindow(window) {
    console.log(window)
    var div = document.getElementById(window);
    div.style.display = "none";

}


function dragElement(elmnt) {


  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
      if (e.target.tagName === "BUTTON") {
        return;
      }

    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function activeButton(btnId) {
  let button = document.getElementById(btnId);
  if (button) {
    button.focus();
  }

  
   // ======== if-statements handling passion window =======
  if (btnId == "title-box1") {
    document.getElementById(currentPassion).style.display = "none";
    currentPassion = "note-1";
    document.getElementById(currentPassion).style.display = "block";
  }
  if (btnId == "title-box2") {
    document.getElementById(currentPassion).style.display = "none";
    currentPassion = "note-2";
    document.getElementById(currentPassion).style.display = "block";
  }
  if (btnId == "title-box3") {
    document.getElementById(currentPassion).style.display = "none";
    currentPassion = "note-3";
    document.getElementById(currentPassion).style.display = "block";
  }
  // ======== if-statements handling interests window =======
  if  (btnId == "interest-1") {
  document.getElementById(currentInterest).style.display = "none";
  currentInterest = "page-1";
  document.getElementById(currentInterest).style.display = "block";
  document.getElementById(currentInterestLink).style.display = "none";
  currentInterestLink = "link-1";
  document.getElementById(currentInterestLink).style.display = "block";

  } else if  (btnId == "interest-2") {
    document.getElementById(currentInterest).style.display = "none";
    currentInterest = "page-2";
    document.getElementById(currentInterest).style.display = "block";
    document.getElementById(currentInterestLink).style.display = "none";
    currentInterestLink = "link-2";
    document.getElementById(currentInterestLink).style.display = "block";

  } else {
    document.getElementById(currentInterest).style.display = "none";
    currentInterest = "page-3";
    document.getElementById(currentInterest).style.display = "block";
    document.getElementById(currentInterestLink).style.display = "none";
    currentInterestLink = "link-3";
    document.getElementById(currentInterestLink).style.display = "block";
  }

}

let currentPassion = "note-1";
let currentInterest = "page-1";
let currentInterestLink = "link-1";

document.getElementById("whoami-btn").addEventListener("click", () => openWindow("whoami-window"));
document.getElementById("passions-btn").addEventListener("click", () => openWindow("passions-window"));
document.getElementById("interests-btn").addEventListener("click", () => openWindow("interests-window"));
document.getElementById("kwk-btn").addEventListener("click", () => openWindow("kwk-window"));



document.getElementById("whoami-close").addEventListener("click", () => closeWindow("whoami-window"));
document.getElementById("passions-close").addEventListener("click", () => closeWindow("passions-window"));
document.getElementById("interests-close").addEventListener("click", () => closeWindow("interests-window"));
document.getElementById("kwk-close").addEventListener("click", () => closeWindow("kwk-window"));


document.getElementById("title-box1").addEventListener("click", () => activeButton("title-box1"));
document.getElementById("title-box2").addEventListener("click", () => activeButton("title-box2"));
document.getElementById("title-box3").addEventListener("click", () => activeButton("title-box3"));

document.getElementById("interest-1").addEventListener("click", () => activeButton("interest-1"));
document.getElementById("interest-2").addEventListener("click", () => activeButton("interest-2"));
document.getElementById("interest-3").addEventListener("click", () => activeButton("interest-3"));

dragElement(document.getElementById("whoami-window"));
dragElement(document.getElementById("passions-window"));
dragElement(document.getElementById("interests-window"));
dragElement(document.getElementById("kwk-window"));
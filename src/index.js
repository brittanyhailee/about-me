function openWindow(window) {
    console.log(window)
    var div = document.getElementById(window);

   if (div.style.display === "none") {
    div.style.display = "block";
    } else {
        div.style.display = "none";
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

document.getElementById("whoami-btn").addEventListener("click", () => openWindow("whoami-window"));
document.getElementById("passions-btn").addEventListener("click", () => openWindow("passions-window"));


document.getElementById("whoami-close").addEventListener("click", () => closeWindow("whoami-window"));
dragElement(document.getElementById("whoami-window"));
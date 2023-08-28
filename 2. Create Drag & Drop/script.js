/*
this JavaScript snippet that deals with drag-and-drop functionality within 
an HTML document. It allows you to drag items from a list and drop them
 into two separate boxes ("rightBox" and "leftBox"). Let's break down 
 each step carefully:
*/

// 1 .  Element Selection:

let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

/**
 
lists: This variable stores a NodeList of elements with the class name 
       "list". It selects multiple elements that belong to the "list" class.

rightBox: This variable stores a reference to the element 
           with the class name "right".

leftBox: This variable stores a reference to the element 
          with the class name "left".

 */

// 2. Loop through the Lists: This loop iterates through each element
//    in the NodeList 'lists' (which contains elements with the class name "list").

for (list of lists) {
  /* 3 . Dragstart Event: This attaches a "dragstart" event listener to 
  each element in the NodeList. The event fires when a drag operation starts
   on one of the elements. */

  list.addEventListener("dragstart", function (el) {
    let selected = el.target;

    /*
    4. Dragover Event (Right Box): This attaches a "dragover" event listener 
    to the "rightBox" element. The event fires when a dragged element is over 
    the "rightBox". The preventDefault() method is called to allow the drop
     event to occur.*/

    rightBox.addEventListener("dragover", function (el) {
      el.preventDefault();
    });

    /**
     5. Drop Event (Right Box): This attaches a "drop" event listener to the 
     "rightBox" element. The event fires when a dragged element is dropped onto 
     the "rightBox". The selected element is appended to the "rightBox" using 
     appendChild(), and then the selected variable is set to null, indicating that 
     the drag operation is complete.
     */

    rightBox.addEventListener("drop", function (el) {
      rightBox.appendChild(selected);
      selected = null;
    });

    /*
    6. Dragover Event (Left Box):  Similar to step 4, this attaches a "dragover" 
    event listener to the "leftBox" element.
    */

    leftBox.addEventListener("dragover", function (el) {
      el.preventDefault();
    });

    /**
     7.Drop Event (Left Box): Similar to step 5, this attaches a "drop" event 
     listener to the "leftBox" element. The event handling is the same, but the 
     selected element is appended to the "leftBox" instead.
     */

    leftBox.addEventListener("drop", function (el) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}

/*
the code sets up drag-and-drop functionality for elements with the 
class name "list". When an element is dragged, the code handles the 
drag operation by allowing the element to be dropped onto either the 
"rightBox" or the "leftBox". After the drop occurs, the dragged element 
is appended to the corresponding box, and the selected variable is reset 
to null to indicate the end of the drag operation.
*/

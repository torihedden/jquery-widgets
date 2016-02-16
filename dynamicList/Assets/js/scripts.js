$(document).ready(function(){
  'use strict';

  $("#to-do-list").on('change', 'input', function(){ //(event, selector, handler) we need to specify input as the selector so that the event only happens if an input is changed. If there were textareas radio buttons, etc. and they changed, we don't want to trigger this function when those other elements are changed
    if ($("input")[$("input").length-1].value !== ""){//if last box in array is not empty
      $("#to-do-list").append("<input type=text>");//add another text box
    }
    if (this.value === "" && this!==$("input")[$("input").length-1]){
      this.remove();
      //"this" is the textbox that is currently being interacted with
      //if the text box is empty AKA has a value of an empty string, AND this is the last text box in the array of all text boxes (AKA at the index of array.length-1), delete it
      //this is because we don't want to delete boxes newly created, as they will be created with a value = "".
    }
  });
});


//.change()
//.focusout()=> .change() triggers if focus is lost, so don't need this

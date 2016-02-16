$(document).ready(function(){
  'use strict';

  $("#to-do-list").on('change', 'input', function(){
    if ($("input")[$("input").length-1].value !== ""){
      $("#to-do-list").append("<input type=text>");
    }
    if ($("input")[$("input").length-1])
  });
});


//.change()
//.focusout()

//on focusOut AND if box.val()=0, delete the text box

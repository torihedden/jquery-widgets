$(document).ready(function(){
  'use strict';

  $("#to-do-list").on('change', 'input', function(){
    if ($("input")[$("input").length-1].value !== ""){
      $("#to-do-list").append("<input type=text>");
    }
    if (this.value === "" && this!==$("input")[$("input").length-1]){
      this.remove();
    }

  });
});


//.change()
//.focusout()

$(document).ready(function(){
  $("textarea").keyup(function(){

    var inputLength = $("textarea").val().length//the length of the value of whatever is typed into the textarea
    var textAreaMax = parseInt($("textarea").attr("maxlength"));//maxlength seems to return a string, so I made it a number
    $(".char-count").html(textAreaMax-inputLength); //characters left = max allowed - already typed
  });

  //achieve the same result without using the maxlength attribute of the textarea element
  // var maxChar = 25;
  // if (inputLength > maxChar){
  //   var clippedText = text.substr(0, $("textarea").val().length)-1
  //   $(this).value = clippedText;
  // }


  $("button").click(function(){
      $("textarea").val(""); //in keeping with the useless nature of this twitter clone, instead of submitting a tweet, the button just deletes anything you type in the textarea, deleting it from cyberspace
  });
});

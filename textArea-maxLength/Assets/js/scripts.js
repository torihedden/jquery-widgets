$(document).ready(function(){
  $("textarea").keyup(function(){

    var inputLength = $("textarea").val().length//the length of the value of whatever is typed into the textarea
    var textAreaMax = parseInt($("textarea").attr("maxlength"));
    $(".char-count").html(textAreaMax-inputLength);
  });

  $("button").click(function(){
      $("textarea").val("");
  });
});

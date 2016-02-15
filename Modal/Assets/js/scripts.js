$(function () {
  'use strict';

  $(".show-modal").click (function(){
    $(".whole-modal").addClass("modal-displayed");
  });

  $(".modal-close").click(function(){
    $(".whole-modal").removeClass("modal-displayed");
  });

});

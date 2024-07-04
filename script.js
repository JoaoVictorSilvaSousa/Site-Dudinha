$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var paper = $("#paper");
  
    envelope.on('click touchstart', function() {
      openEnvelope();
    });
    btn_open.on('click touchstart', function() {
      openEnvelope();
    });
    btn_reset.on('click touchstart', function() {
      closeEnvelope();
    });
  
    function openEnvelope() {
      envelope.addClass("open").removeClass("close");
      /* No need for setTimeout here */
      paper.removeClass("hidden").addClass("visible");
    }
  
    function closeEnvelope() {
      envelope.addClass("close").removeClass("open");
      paper.removeClass("visible").addClass("hidden");
    }
  });
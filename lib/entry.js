require('../styles/index.scss');
require('../styles/holds.scss');
document.addEventListener("DOMContentLoaded", () => {
  let gridSize = 50;

  $(" .box ")
    .draggable({ grid: [ gridSize, gridSize ] })

  	.on("mouseover", function(){
    	$( this ).addClass("move-cursor")
  	})

  	.on("mousedown", function(){
    	$( this )
        .removeClass("move-cursor")
        .addClass("grab-cursor")
        .addClass("opac");

    	$(" .text ").hide();

  	})

  	.on("mouseup", function(){
    	$( this )
        .removeClass("grab-cursor")
        .removeClass("opac")
        .addClass("move-cursor");
  	});

    $(" .hold ").on("click",  (e) => {
      let element = $(" .box ")[0];
      let classList = element.classList;
      for (let i = 0; i < classList.length; i++){
        if (classList.item(i) !== "box"
        && classList.item(i) !== "ui-draggable"
        && classList.item(i) !== "ui-draggable-handle"){
          classList.remove(classList.item(i));
        }
      }
      $(" .box ").addClass("box");
      $(" .box ").addClass(e.target.id);
    });

    let rotation = 5;
    jQuery.fn.rotate =(degrees) => {
        $(" .box ").css({'transform' : 'rotate('+ degrees +'deg)'});
        return $(this);
    };
    $('.rotate').click(() => {
        rotation += 5;
        $(" .box ").rotate(rotation);
    });
    $('.crotate').click(() => {
        rotation -= 5;
        $(" .box ").rotate(rotation);
    });
    $('.rotate').on("mousedown", () => {
        rotation += 5;
        $(" .box ").rotate(rotation);
    });

    let interval;
    $("#crotate")[0].addEventListener('mousedown', function(e) {
      interval = setInterval(function() {
        rotation -= 5;
        $(" .box ").rotate(rotation);
      }, 50);
    });

    $("#crotate ")[0].addEventListener('mouseup',function(e) {
      clearInterval(interval);
    });

    $("#crotate")[0].addEventListener('mouseout',function(e) {
      clearInterval(interval);
    });
    $("#rotate")[0].addEventListener('mousedown', function(e) {
      interval = setInterval(function() {
        rotation += 5;
        $(" .box ").rotate(rotation);
      }, 50);
    });

    $("#rotate ")[0].addEventListener('mouseup',function(e) {
      clearInterval(interval);
    });

    $("#rotate")[0].addEventListener('mouseout',function(e) {
      clearInterval(interval);
    });

    $(" .counterclockwise ").on("click", () => {
      $(" .box ").rotate(rotation);
    });
    $(" .clockwise ").on("click", () => {
      $(" .box ").rotate(rotation);
    });

});

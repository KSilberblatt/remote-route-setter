require('../styles/index.scss');
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

});

require('../styles/index.scss');
require('../styles/holds.scss');
document.addEventListener("DOMContentLoaded", () => {
  let gridSize = 50;
  let deleteMode = false;
  console.log("hey");
  let holds = $( " .hold " );

  // Draggable box [grid simulation]
  let gridDrag = (ele) =>{
      ele.draggable({ grid: [ gridSize, gridSize ] })

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
    }
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
  //end

  // Delete mode toggle
  $('#delete').click(() => {
    if (deleteMode) {
      $(' .grid ').removeClass("delete-cursor");
      deleteMode = !deleteMode;
    }
    else {
      deleteMode = !deleteMode;
      $(' .grid ').addClass("delete-cursor");
    }
  });
  //end

  //Rotate
      //Rotate on click
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
  $(" .counterclockwise ").on("click", () => {
    $(" .box ").rotate(rotation);
  });
  $(" .clockwise ").on("click", () => {
    $(" .box ").rotate(rotation);
  });
  //end

  // Rotate on hold
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
    //end
  //end

  //Drag copy
  $(" #sidebar img ").each( function( index, element ){
    gridDrag($( this ));
    $( this ).draggable({
      revert: "invalid",
      helper: "clone"
     });

  });
  // for (let i = 0; i < holds.length; i++) {
  //   holds[i].draggable({ revert: false });
  //   console.log("ran");
  // }
  $( " #grid " ).droppable({
    accept: "#sidebar img",
    drop: function(event, ui){
        let newHold = $(ui.helper).clone().removeClass('hold');
        gridDrag(newHold);
        $( " .box " ).removeClass("box");
        newHold.addClass("box");
        $(this).append(newHold);
    }
  });

  // hold ui-draggable ui-draggable-handle ui-draggable-dragging
  //end

});

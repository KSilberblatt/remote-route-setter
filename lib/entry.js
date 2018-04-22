require('../styles/reset.scss');
require('../styles/index.scss');
require('../styles/holds.scss');

import { gridDrag, makeBox, rotateOnClick, deletion } from "../dist/helperfunctions.js";
import Hold from "../dist/holds.js";
document.addEventListener("DOMContentLoaded", () => {
  let holdIndex=0;
  let deleteMode = false;
  let holds = $( " .hold " );

    $(" .route-hold ").on("click",  (e) => {
      let element = $(" .route-hold ")[0];
      makeBox(element);
    });

  // Delete mode toggle
  // $('#delete').click(() => {
  //   if (deleteMode) {
  //     $(' .grid ').removeClass("delete-cursor");
  //     deleteMode = !deleteMode;
  //   }
  //   else {
  //     deleteMode = !deleteMode;
  //     $(' .grid ').addClass("delete-cursor");
  //   }
  // });
  //end
  rotateOnClick();

  /*
    TODO: facter out jquery event listenters so that this code isn't so
    ugly - maybe takeout jquery all together? 
  */
  $("body").keydown(function(e) {
    let ele = $(" .box ")[0];
    if(e.keyCode === 8 || e.keyCode === 46)  {
      ele.remove();
    }
  });
  $(" #sidebar img ").each( function( index, element ){
    gridDrag($( this ));
    $( this ).draggable({
      revert: "invalid",
      helper: "clone"
     });

  });
  $( " #grid " ).droppable({
    accept: "#sidebar img",
    drop: function(event, ui){
        let clone = $(ui.helper).clone().removeClass('hold');
        clone.addClass("route-hold");
        gridDrag(clone);
        makeBox(clone);
        holdIndex++;
    }
  });
});

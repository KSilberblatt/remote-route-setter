let gridSize = 50;
export const gridDrag = (ele) => {
    ele.draggable({ grid: [ gridSize, gridSize ] })

    .on("mouseover", function(){
      $( this ).addClass("move-cursor")
    })

    .on("mousedown", function(){
      $( this )
        .removeClass("move-cursor")
        .addClass("grab-cursor")
        .addClass("opac");
      if ($( this ).hasClass("route-hold")){
        makeBox($( this ));
      }

    })

    .on("mouseup", function(){
      $( this )
        .removeClass("grab-cursor")
        .removeClass("opac")
        .addClass("move-cursor");
    });
};



export const makeBox = (ele) => {
  $( " .box " ).removeClass("box");
  ele.addClass("box");
};

export function rotateOnClick(){
  $('.rotate').click(()=>{
    setRotate(5);
    rotateEle();
  });
  $('.crotate').click(()=>{
    setRotate(-5);
    rotateEle();
  });
  $('.rotate').on("mousedown", ()=>{
    setRotate(5);
    rotateEle();
  });
  //end

  // Rotate on hold
  let interval;
  $("#crotate")[0].addEventListener('mousedown', function(e) {
    interval = setInterval(()=>{
      setRotate(-5);
      rotateEle();
    }, 50);
  });

  $("#crotate ")[0].addEventListener('mouseup',function(e) {
    clearInterval(interval);
  });

  $("#crotate")[0].addEventListener('mouseout',function(e) {
    clearInterval(interval);
  });
  $("#rotate")[0].addEventListener('mousedown', function(e) {
    interval = setInterval(() => {
      setRotate(5);
      rotateEle();
    }, 50);
  });

  $("#rotate ")[0].addEventListener('mouseup',function(e) {
    clearInterval(interval);
  });

  $("#rotate")[0].addEventListener('mouseout',function(e) {
    clearInterval(interval);
  });
}

function rotateEle(){
  $(" .box ").rotate(parseInt( $(" .box ")[0].getAttribute("alt")));
}
function setRotate(deg){
  $(" .box ")[0].setAttribute("alt",
  `${parseInt($(" .box ")[0].getAttribute("alt")) + deg}`);
}

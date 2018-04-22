let gridSize = 50;
let rotationSpeed = 5;
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
    setRotate(rotationSpeed);
    rotateEle();
  });
  $('.crotate').click(()=>{
    setRotate(-rotationSpeed);
    rotateEle();
  });
  $('.rotate').on("mousedown", ()=>{
    setRotate(rotationSpeed);
    rotateEle();
  });
  //end

  // Rotate on hold
  let interval;
  $("#crotate")[0].addEventListener('mousedown', function(e) {
    interval = setInterval(()=>{
      setRotate(-rotationSpeed);
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
      setRotate(rotationSpeed);
      rotateEle();
    }, 50);
  });

  $("#rotate ")[0].addEventListener('mouseup',function(e) {
    clearInterval(interval);
  });

  $("#rotate")[0].addEventListener('mouseout',function(e) {
    clearInterval(interval);
  });

  jQuery.fn.rotate =(degrees) => {
    /*// Code inspired by
    // https://codepen.io/dlouise/pen/NPZMjo
    // Dana Iti*/
      $(" .box ").css({'transform' : 'rotate('+ degrees +'deg)'});
      return $(this);
  };
  $("body").keydown(function(e) {
    let ele = $(" .box ")[0];
  if(e.keyCode === 37) { // left
    ele.setAttribute("alt", `${parseInt(ele.getAttribute("alt")) - rotationSpeed}`);
    $(" .box ").rotate(parseInt(ele.getAttribute("alt")));
    }
  else if(e.keyCode === 39) { // right
      ele.setAttribute("alt", `${parseInt(ele.getAttribute("alt")) + rotationSpeed}`);
    $(" .box ").rotate(parseInt(ele.getAttribute("alt")));
    }
  });
}

function rotateEle(){
  $(" .box ").rotate(parseInt( $(" .box ")[0].getAttribute("alt")));
}
function setRotate(deg){
  $(" .box ")[0].setAttribute("alt",
  `${parseInt($(" .box ")[0].getAttribute("alt")) + deg}`);
}

export function deletion(deleteMode){
  if (deleteMode){
    $("body").keydown(function(e) {
      let ele = $(" .box ")[0];
      if(e.keyCode === 8 || e.keyCode === 46) {
        ele.remove();
      }
    });
  }
}

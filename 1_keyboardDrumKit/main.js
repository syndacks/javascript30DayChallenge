function aPress(){
  console.log("you pressed the a key");
  $('#a').attr('class', 'pressed');
  $('#thump')[0].play();
}

function sPress(){
  console.log("you pressed the s key");
  $('#bop')[0].play();
}

function dPress(){
  console.log("you pressed the d key");
  $('#scratch')[0].play();
}

function fPress(){
  console.log("you pressed the f key");
  $('#laser')[0].play();
}

$(document).on('keypress', function (e) {
  console.log(e.which);
  if(e.which===97){aPress();}
  if(e.which===115){sPress();}
  if(e.which===100){dPress();}
  if(e.which===102){fPress();}
});

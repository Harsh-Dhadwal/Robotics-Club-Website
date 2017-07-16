var window_height = window.innerHeight;
var window_width = window.innerWidth;
var nav_Height = window_height/3;
var nav_Width = window_width/4;
var isOpen = 0;
var oriantation = 0;

window.addEventListener('resize', function(event){
  window_height = window.innerHeight;
  window_width = window.innerWidth;
  nav_Height = window_height/3;
  nav_Width = window_width/4;
  if (window_height > window_width) {
    oriantation = 1;
  }
  else {
    oriantation = 0;
  }
});

function navSwitch() {
  if (isOpen < 1) {
    navOpen();
  }
  else {
    navClose();
  }
}



function navGlow(idName) {
  var glowId = idName;
  var glowCircle = document.getElementById(glowId);
  glowCircle.setAttribute('opacity', '1');
}

function navDim(idName) {
  var glowId = idName;
  var glowCircle = document.getElementById(glowId);
  glowCircle.setAttribute('opacity', '0');
}

function navOpen() {
  isOpen = 1;
  document.getElementById("navCtn").style.width = "80%";					// expand nav bar
  // Rc button
  var btn_Rc = document.getElementById("btnRc");
  btn_Rc.style.marginTop = (nav_Height).toString()+"px";
  btn_Rc.style.marginLeft = (nav_Width).toString()+"px";

  // Au button
  var btn_Au = document.getElementById("btnAu");
  btn_Au.style.marginTop = (nav_Height-135).toString()+"px";
  btn_Au.style.marginLeft = (nav_Width+135).toString()+"px";
  btn_Au.style.webkitTransform = "rotate(30deg)";

  // Pr button
  var btn_Pr = document.getElementById("btnPr");
  btn_Pr.style.marginTop = (nav_Height-95).toString()+"px";
  btn_Pr.style.marginLeft = (nav_Width-135).toString()+"px";
  btn_Pr.style.webkitTransform = "rotate(-20deg)";

  // Ju button
  var btn_Ju = document.getElementById("btnJu");
  btn_Ju.style.marginTop = (nav_Height+175).toString()+"px";
  btn_Ju.style.marginLeft = (nav_Width-100).toString()+"px";
  btn_Ju.style.webkitTransform = "rotate(-50deg)";

  // Uk button
  var btn_Uk = document.getElementById("btnUk");
  btn_Uk.style.marginTop = (nav_Height+235).toString()+"px";
  btn_Uk.style.marginLeft = (nav_Width+170).toString()+"px";
  btn_Uk.style.webkitTransform = "rotate(55deg)";

}


function navClose() {
  isOpen = 0;
  document.getElementById("navCtn").style.width = "150px";					// expand nav bar
  // Rc button
  var btn_Rc = document.getElementById("btnRc");
  btn_Rc.style.marginTop = "0";
  btn_Rc.style.marginLeft = "0";



  // Au button
  var btn_Au = document.getElementById("btnAu");
  if (oriantation < 1) {
    btn_Au.style.marginTop = "150px";
    btn_Au.style.marginLeft = "30px";
  }
  else {
    btn_Au.style.marginTop = "1px";
    btn_Au.style.marginLeft = "135px";
  }

  btn_Au.style.webkitTransform = "rotate(0deg)";

  // Pr button
  var btn_Pr = document.getElementById("btnPr");
  if (oriantation < 1) {
    btn_Pr.style.marginTop = "250px";
    btn_Pr.style.marginLeft = "1px";
  }
  else {
    btn_Pr.style.marginTop = "30px";
    btn_Pr.style.marginLeft = "235px";
  }
  btn_Pr.style.webkitTransform = "rotate(0deg)";

  // Ju button
  var btn_Ju = document.getElementById("btnJu");
  if (oriantation < 1) {
    btn_Ju.style.marginTop = "350px";
    btn_Ju.style.marginLeft = "30px";
  }
  else {
    btn_Ju.style.marginTop = "1px";
    btn_Ju.style.marginLeft = "335px";
  }
  btn_Ju.style.webkitTransform = "rotate(0deg)";

  // Uk button
  var btn_Uk = document.getElementById("btnUk");
  if (oriantation < 1) {
    btn_Uk.style.marginTop = "450px";
    btn_Uk.style.marginLeft = "1px";
  }
  else {
    btn_Uk.style.marginTop = "30px";
    btn_Uk.style.marginLeft = "435px";
  }
  btn_Uk.style.webkitTransform = "rotate(0deg)";
}

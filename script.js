let homeicon = document.getElementById("navbar"); //get the icon from the html document

window.onscroll = function(){scrollfunction()}; // when it detects scroll it calls the scrollfunction 

function scrollfunction(){//this function displays the icon
    if (document.body.scrollTop >500 || document.documentElement.scrollTop >500){ // both of these are properties that return the number of pixels from the top to the scrolled point i.e. how much has been scrolled
       homeicon.style.display ="flex"; // once 500 er beshi scroll hocche we display the block, homeicon er style ( i.e. css )e giye we're setting display to block.
       
    }else{
     homeicon.style.display = "none"; // similarly 500 er kom thakle we're setting display to none. 
    }
}

function openLiar() {
  document.getElementById("liar").style.display = "flex";
  setTimeout(function () {
    document.getElementById("liar").style.opacity = 1;
  }, 100);
  
}

function closeLiar() {
  document.getElementById("liar").style.opacity = 0;
  setTimeout(function () {
   
    document.getElementById("liar").style.display = "none"
  }, 900);
  
}

function openbe() {
  document.getElementById("bracuexpress").style.display = "flex";
  setTimeout(function () {
    document.getElementById("bracuexpress").style.opacity = 1;
  }, 100);
}

function closebe() {
  document.getElementById("bracuexpress").style.opacity = 0;
  setTimeout(function () {
   
    document.getElementById("bracuexpress").style.display = "none"
  }, 900);
  
}

function openinku() {

  document.getElementById("inksden").style.display = "block";
  setTimeout(function () {
    document.getElementById("inksden").style.opacity = 1;
  }, 100);
  

}

function closeinku() {
  
  document.getElementById("inksden").style.opacity = 0;
  setTimeout(function () {
   
    document.getElementById("inksden").style.display = "none"
  }, 900);
  
}

function opensm() {
  document.getElementById("socials").style.display = "flex";
  setTimeout(function () {
    document.getElementById("socials").style.opacity = 1;
  }, 100);
}

function closesm() {
  document.getElementById("socials").style.opacity = 0;
  setTimeout(function () {
   
    document.getElementById("socials").style.display = "none"
  }, 900);
  
}
// var sbox = $('.sbox');
// sbox.bind('mousewheel DOMMouseScroll', function(event){
//   event.preventDefault();
//   box.scrollLeft(box.scrollLeft() - event.originalEvent.wheelDelta);
// });


// var d = document.getElementById("myBtn");
// if(d){
// 	addEventListener("click", toggleNav);
// }

// function toggleNav(){
//     navSize = document.getElementById("mySidenav").style.width;
//     if (navSize == 250) {
//         return closeNav();
//     }
//     return openNav();
// }

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("close").style.display = "block";     
    document.getElementById("myBtn").style.display="none";   	  
   document.getElementById("container-fluid").style.opacity=0.5;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("close").style.display = "none";
    document.getElementById("myBtn").style.display="block"; 
    document.getElementById("container-fluid").style.opacity=1;

}
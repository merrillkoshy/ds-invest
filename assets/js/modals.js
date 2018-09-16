
function view( option ){
	switch (option){
	    case 1 : var modal = document.getElementById('manipur-1'); var btn = document.getElementById("manipur-1Btn");doit(modal,btn);break;
	    case 2 : var modal = document.getElementById('powai'); var btn = document.getElementById("powai-1Btn");doit(modal,btn);break;        
	    default : alert('sorry there was an error in program');
	}
}

function doit(modal,btn){
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}



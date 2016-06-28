var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function goToDivs(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
    	slideIndex = 1
    } 
    if (n < 1) {
    	slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
    	dots[i].style.backgroundColor = "";
    }
    x[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].style.backgroundColor = "white";
}

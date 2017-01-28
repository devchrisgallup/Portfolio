// When user click on client image
// they are directed to the following URLs
document.getElementById('tutor').onclick = function () {
    location.href = "http://abtutoringkc.com/index.php";
}

document.getElementById('joyful').onclick = function () {
    location.href = "http://www.joyfulanswers.com/";
}

document.getElementById('grocery').onclick = function () {
    location.href = "http://chrisgalluptest.info/angular/index.html";
}

// on hover chage images
document.getElementById('tutor').onmouseenter = function () {
    document.getElementById('tutor').src = 'img/tutortext.png';
} 

document.getElementById('tutor').onmouseleave = function () {
    document.getElementById('tutor').src = 'img/tutor.png';
} 

document.getElementById('joyful').onmouseenter = function () {
    document.getElementById('joyful').src = 'img/joyfultext.png';
} 

document.getElementById('joyful').onmouseleave = function () {
    document.getElementById('joyful').src = 'img/joyful.png';
} 

document.getElementById('grocery').onmouseenter = function () {
    document.getElementById('grocery').src = 'img/grocerytext.png';
} 

document.getElementById('grocery').onmouseleave = function () {
    document.getElementById('grocery').src = 'img/grocery.png';
} 


// preload images
function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages([
    'img/tutortext.png',
    'img/joyfultext.png',
    'img/grocerytext.png',
    'img/tutor.png',
    'img/joyful.png',
    'img/grocery.png',
    ]);


// jquery smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var targetOff = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': targetOff.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
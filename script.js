var Expand = document.querySelector('.btn');
var Content = document.querySelector('.card-description');

Expand.addEventListener('click', function(){
	Content.style.height = "auto";
	Expand.style.display = "None";

});
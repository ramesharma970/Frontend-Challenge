var Expand = document.querySelector('.btn');
var Collapse = document.querySelector('.btn1');
var Content = document.querySelector('.card-description');



Expand.addEventListener('click', function(){

	Content.style.height = "auto";
	Expand.style.display = "None";	
	Collapse.style.display ="block";

	Collapse.addEventListener('click',function(){
		Content.style.height = "50px";
		Collapse.style.display ="None";
		Expand.style.display = "block";	



	});

});




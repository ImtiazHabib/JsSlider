
var btnImg = document.querySelectorAll('.btn');

var slideImg = document.querySelectorAll('.slide');


function reset(){
	for( var i=0; i < slideImg.length ; i++)
	{
		slideImg[i].style.display ="none";
	}
}


function  ImgOne(){
	
	
		reset();
		slideImg[0].style.display ="block";

	
}
ImgOne();

// sliding with buttion
for( let k=0; k < slideImg.length; k++)
{
	btnImg[k].addEventListener('click',function(){

		reset();
		slideImg[k].style.display = "block";
	})
}



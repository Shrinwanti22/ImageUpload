function view(obj)
{
	var x = document.getElementsByTagName("canvas");
	var i;
	for (i = 0; i < x.length; i++) 
	{
	    x[i].style.display = "none";
	}
	var preview = document.getElementById('preview');
	preview.style.visibility='visible';
	var canvas = document.getElementById(obj.title+"c");
	canvas.style.display='block';
	console.log(obj.title);		
	x = document.getElementById(obj.title).src;
	canvas.style.backgroundImage="url('"+x+"')";  
}

function deletePic(obj)
{
	document.getElementById(obj+"div").remove();
	document.getElementById(obj+"c").remove();
}

function addImage(object)
{
  console.log(object.url);
  console.log(object.img_name);
  var listTag = document.getElementById('list');
  var preview = document.getElementById('preview');
  var image = document.createElement('img')
  var span = document.createElement('span'); 
  var canvas = document.createElement('canvas');
  image.setAttribute('src', object.url);
  image.setAttribute('title', object.img_name);
  image.setAttribute('id', object.img_name);
  image.setAttribute('onclick', "view(this)");
  canvas.setAttribute('id', object.img_name+"c"); 
  canvas.setAttribute('class', 'canvasClass')
  console.log(object.img_name+"c");
  span.appendChild(image);
  listTag.appendChild(span);
  preview.appendChild(canvas);       
}
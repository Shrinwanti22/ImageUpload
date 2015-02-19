function addImage(object)
{
  console.log(object.url);
  console.log(object.img_name);
  var listTag = document.getElementById('list');
  var preview = document.getElementById('preview');
  var image = document.createElement('img');
  var div = document.createElement('div'); 
  var canvas = document.createElement('canvas');
  var cross = document.createElement('img');
  cross.setAttribute('src', 'close.png');
  cross.setAttribute('id', 'cross');
  image.setAttribute('src', object.url);
  image.setAttribute('title', object.img_name);
  image.setAttribute('id', object.img_name);
  image.setAttribute('onclick', "view(this)");
  div.setAttribute('id', object.img_name+"div");
  cross.setAttribute('onclick', "deletePic('"+object.img_name+"')");
  canvas.setAttribute('id', object.img_name+"c"); 
  canvas.setAttribute('class', 'canvasClass');
  console.log(object.img_name+"c");
  div.appendChild(cross);
  div.appendChild(image);
  listTag.appendChild(div);
  preview.appendChild(canvas);       
}
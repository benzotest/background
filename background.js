function a (){
	alert('hi');
}
var css = document.getElementsByTagName("h3")[0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];


function addBackground(){
	console.log(color1.value);
	console.log(color2.value);
	body.style.background = `linear-gradient(to right, ` + color1.value + `,` + color2.value + `)`;
	css.textContent = body.style.background;
}

color1.addEventListener("input", addBackground)
color2.addEventListener("input", addBackground)

a();

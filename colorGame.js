var numSquares=6;
var squares=document.querySelectorAll(".square");
var color=document.querySelector("#color");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var buttons=document.querySelector("#buttons");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var reset=document.querySelector("#reset");
var colors=colorGenerator(6);

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	h1.style.backgroundColor="rgb(0, 255, 255)";
	easyfun();
});
function easyfun(){
	numSquares=3;
	message.textContent="";
	colors=colorGenerator(numSquares);
	rightColor=colors[colorPicker(colors.length)];
	color.textContent=rightColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	h1.style.backgroundColor="rgb(0, 255, 255)";
	hardfun();
});
function hardfun(){
	numSquares=6;
	message.textContent="";
	colors=colorGenerator(numSquares);
	rightColor=colors[colorPicker(colors.length)];
	color.textContent=rightColor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
	}
}

reset.addEventListener("click",function(){
	reset.textContent="new colors";
	h1.style.backgroundColor="rgb(0, 255, 255)";
	if(numSquares===3)
		easyfun();
	else if(numSquares===6)
		hardfun();
});

var rightColor=colors[colorPicker(colors.length)];
color.textContent=rightColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	//add event listener to all color divs
	squares[i].addEventListener("click",function(){
		if (this.style.backgroundColor===rightColor){
			message.textContent="Correct!";
			allColorChanged(rightColor);
			h1.style.backgroundColor=rightColor;
			buttons.style.color="rgb(0, 150, 0)";
			reset.textContent="play again";
		}
		else{
			this.style.backgroundColor="black";
			message.textContent="Try Again!";
			buttons.style.color="rgb(250, 0, 0)";
		}
	});
}

function allColorChanged(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function colorPicker(colorsLength){
	return Math.floor(Math.random() * colorsLength); 
}

function colorGenerator(colorsLength){
	var colorArr=[];
	var r,g,b;
	for(var i=0;i<colorsLength;i++){
		r=colorPicker(256);
		g=colorPicker(256);
		b=colorPicker(256);
		colorArr[i]="rgb("+r+", "+g+", "+b+")";
	}
	return colorArr;
}
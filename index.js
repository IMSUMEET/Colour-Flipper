 // to check if the js is working 
// alert("Hello User");

$(document).ready(function () {
	console.log("READY!");
	

});

//short cut for above
// $(function(){

// });

var RandomSimpleColor = ["Red" , "Blue" , "Green" ,"Yellow"]; 

$("#Simplebutton").click(function(){
	let RandomIndex = Math.floor(Math.random() * 4);
	let RandomValue = RandomSimpleColor[RandomIndex];
	// alert("Hello Simplebutton" + " " +RandomValue);
	$("body").css("background-color" , RandomValue);
	$("#Simplebutton").css("background-color" , RandomValue);
	$("h1").text("BACKGROUND-COLOR: " + RandomValue);
	$("h1").css("text-transform" , "uppercase");

});


$("#Hexbutton").click(function(){
	
	let RandomValue = Math.floor(Math.random()*16777215).toString(16);
	// alert("Hello Hexbutton " + RandomValue);
	$("body").css("background-color" , "#"+RandomValue);
	$("#Hexbutton").css("background-color" , "#"+RandomValue);
	$("h1").text("BACKGROUND-COLOR:" + " #"+RandomValue);
	$("h1").css("text-transform" , "uppercase");

});

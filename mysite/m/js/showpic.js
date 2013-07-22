function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	
	//src refers to the src attribute in an img element
	//source refers to the href attribute in an a element
	//The first argument is the attribute we want to affect and the second argument is the value
	placeholder.setAttribute("src",source);
	
	var titletext = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = titletext;
}

function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert (body_element.childNodes.length);
	
}

//window.onload = countBodyChildren;
//Node types, element:1, attribute:2, text:3

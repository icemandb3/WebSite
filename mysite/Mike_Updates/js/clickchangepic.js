function showPic(whichpic){
	//source is the href attribute that has the path to the new picture
	//specifically this assigns the href attribute to source
	var source = whichpic.getAttribute("href");
	//placeholder is the id of the destination that we want to change
	//in this case, it is the img element with the id equal to placeholder
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

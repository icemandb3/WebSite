function loadXMLClasses()
{
xmlhttp=new XMLHttpRequest();

xmlhttp.onreadystatechange=function()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	}
}
xmlhttp.open("GET","../SkateLessons.xml",true);
xmlhttp.send();
}
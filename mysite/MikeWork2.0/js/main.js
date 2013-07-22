function sendEmail(){

	if (!document.getElementsByTagName){
		return false;
	}
	if (!document.getElementById){
		return false;
	}
	if (!document.getElementById("emailform")){
		return false;
	}
	var emailForm = document.getElementById("emailform");
	var formInputFields = document.getElementsByTagName("input");
	var formTextAreaFields = document.getElementsByTagName("textarea");
	
}

function validateLloydEmailForm(){
	var frmName=document.forms["myForm"]["lloydName"].value;
	var frmEmail=document.forms["myForm"]["lloydEmail"].value;
	var frmComments=document.forms["myForm"]["lloydComments"].value;
	var atpos = frmEmail.indexOf("@");
	var dotpos = frmEmail.lastIndexOf(".");
	
	if (frmName==null || frmName=="")
		{
			alert("The name field needs to be filled out");
			return false;
		}
	if (frmEmail==null || frmEmail=="")
		{
			alert("The email field needs to be filled out");
			return false;
		}
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=frmEmail.length)
		{
			alert("The email is not in the valid format");
			return false;
		}
	if (frmComments==null || frmComments=="")
		{
			alert("The comments field needs to be filled out");
			return false;
		}
}



function sendGroupEmail(){
	var grpName=document.forms["groupemail"]["groupname"].value;
	var conName=document.forms["groupemail"]["contactname"].value;
	var conAddress=document.forms["groupemail"]["contactaddress"].value;
	var conCity=document.forms["groupemail"]["contactcity"].value;
	var conState=document.forms["groupemail"]["contactstate"].value;
	var conZip=document.forms["groupemail"]["contactzip"].value;
	var conPhone=document.forms["groupemail"]["contactphone"].value;
	var conEmail=document.forms["groupemail"]["contactemail"].value;
	var numSkaters=document.forms["groupemail"]["numskaters"].value;
	var arriveDate=document.forms["groupemail"]["arrivaldate"].value;
	var arriveTime=document.forms["groupemail"]["arrivaltime"].value;
	var depTime=document.forms["groupemail"]["departtime"].value;
}

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

function validateLloydGroupEmailForm(){
	var frmGroupName=document.forms["groupemail"]["groupname"].value;
	
	if (frmGroupName==null || frmGroupName=="")
		{
			alert("Your missing something");
			return false;
		}
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
			alert("The email is not in a valid format");
			return false;
		}
	if (frmComments==null || frmComments=="")
		{
			alert("The comments field needs to be filled out");
			return false;
		}
}




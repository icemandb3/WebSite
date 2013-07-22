// change firstskcost to 89 after
var FIRSTSKCOST = 89.00;
var MULTISKDISC = 21.00;
var EARLYDISC = 9.00;
var skaterName = "";
var itemCount = 0;

function getCost(){
	
	var SignupCutOffDate=new Date("September 08, 2012 23:30");
	SignupCutOffDate.setHours(21);
	var cuDate = SignupCutOffDate.toLocaleDateString();
	
	var cuTime = SignupCutOffDate.toLocaleTimeString(21);
	
	
	var today = new Date();
	var todayTime = today.toLocaleTimeString();
	var todayDate = today.toLocaleDateString();
	
	if (today < SignupCutOffDate)
		{
		//alert(googlecart.getSubtotal());
		alert("You are signing up on " + todayDate + " at " + todayTime + ". The cutoff date is " + cuDate + ", and the cutoff time is " + cuTime + ". You will receive a $9.00 discount on this item.");	
		
		return FIRSTSKCOST - EARLYDISC;
		}
	else
		{
		//alert(googlecart.getSubtotal());
		//alert("You are signing up on " + todayDate + " at " + todayTime + ". The cutoff date and time is " + SignupCutOffDate);
		return FIRSTSKCOST;
		}
}


function checkNames(){
	var fn = document.forms["classes_form"]["skater_fname"].value;
	var ln = document.forms["classes_form"]["skater_lname"].value;
	var dt = $('#select_day_time option:selected').val();
	var dt = document.forms["classes_form"]["select_day_time"].val();
	var curName;
	var fullName;
	if (fn=="" || fn==null || ln=="" || ln==null || dt=="daytime" || dt==null)
		{
			$('#erbox').show();
		
			return false;
		}
		else
		{
			$('#erbox').hide();
		}
	
	
	fn = $.trim(fn);
	ln = $.trim(ln);
	curName = fn.toUpperCase() + " " +ln.toUpperCase();
	
	
	if (curName == window.skaterName)
		{
			$('#product-price').val(FIRSTSKCOST - MULTISKDISC);
			window.itemCount = window.itemCount + 1;
		}
	else
		{
			
			$('#product-price').val(getCost());
			
			//$('#product-price').val(FIRSTSKCOST);
			window.itemCount = window.itemCount + 1;
			window.skaterName=curName;
		}
	// disable the fname and lname fields when the user clicks the add to cart link
	//$('#skater_fname').attr('disabled','disabled');
	//$('#skater_lname').attr('disabled','disabled');
	$('#skater_fname').attr('readonly','true');
	$('#skater_lname').attr('readonly','true');
	$("#change_skater").show();
	//$('#skater_fname').Attr('readonly', 'false');
	//$('#skater_lname').Attr('readonly', 'false');
	// other options for disabling
	// this.disabled = true;
}


$(document).ready(function() {
	// on ready, clear values for all hidden input fields
	$('#product-title').val("")
	$('#product-attr-description').val("")
	$('#product-price').val("")
	$('#sk-name').val("")
	$('#erbox').hide();
	$("#change_skater").hide();
	if (googlecartWidget.isLoaded())
	{
	googlecart.clear();
	}
	
	
	var theThing = document.classes_form.select_day_time;
	// Format in option is "text to appear", "value", "default selected", "selected - true/false"
    theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    theThing.options[2]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    theThing.options[4]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM ", false, false)

	   
    $('#select_class').change(function(){
    	document.classes_form.select_day_time.options.length=0
    	
    	$('#product-attr-description').val("")
    	
    	if ($('#select_class').val() == "Snowbunnies 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[4]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM ", false, false)
    		}
    	else if ($('#select_class').val() == "Snowbunnies 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[4]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM ", false, false)
    		}
    	else if ($('#select_class').val() == "Snowbunnies 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 4:00PM", "Wednesday A 4:00PM", false, false)
    			theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[4]=new Option("Fri 5:30PM", "Friday 5:30PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM ", false, false)
    		}
    	else if ($('#select_class').val() == "Introductory")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Wed 4:30PM", "Wednesday A 4:30PM", false, false)
    			theThing.options[3]=new Option("Wed 6:30PM", "Wednesday B 6:30PM", false, false)
    			theThing.options[4]=new Option("Fri 6:00PM", "Friday 6:00PM", false, false)
    			theThing.options[5]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 6:00PM", "Wednesday 6:00PM", false, false)
    			theThing.options[3]=new Option("Sat 10:00AM", "Saturday 10:00AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:00PM", "Monday 6:00PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}

    	else if ($('#select_class').val() == "Basic 7")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Basic 8")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    			theThing.options[3]=new Option("Sat 10:30AM", "Saturday 10:30AM", false, false)
    		}

    	else if ($('#select_class').val() == "Freeskate 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Freeskate 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Freeskate 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
		else if ($('#select_class').val() == "Freeskate 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 6:30PM", "Monday 6:30PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}

    	else if ($('#select_class').val() == "Freeskate 5")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Freeskate 6")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    			theThing.options[2]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult 1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult 2")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult 3")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult 4")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult FS-1")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Mon 7:00PM", "Monday 7:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Int-Low-Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 9:00AM", "Saturday 9:00AM", false, false)
    		}
    	else if ($('#select_class').val() == "High-Power")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 8:30AM", "Saturday 8:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Moves")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 6:00PM", "Wednesday 6:00PM", false, false)
    		}
    	else if ($('#select_class').val() == "Jumps")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Sat 9:30AM", "Saturday 9:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Spins")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Wed 6:30PM", "Wednesday 6:30PM", false, false)
    		}
    	else if ($('#select_class').val() == "Adult Specialty")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 10:30AM", "Tuesday 10:30AM", false, false)
    		}
    	else if ($('#select_class').val() == "Patch")
    		{
    			var theThing = document.classes_form.select_day_time;
    			theThing.options[0]=new Option("Choose Day & Time", "daytime", true, true)
    			theThing.options[1]=new Option("Tue 10:00AM", "Tuesday 10:00AM", false, false)
    		}    		
    		});
	
	
	$('#change_skater').click(function(){
		
					window.skaterName = "";
					window.itemCount = 0;
					$('#skater_fname').attr('readonly','false');
					$('#skater_lname').attr('readonly','false');
					$('#skater_fname').val("");
					$('#skater_lname').val("");
					$("#change_skater").hide();
					location.reload();
					$('#skater_fname').focus();
				
	});
	
	/*
	Other methods to refresh page with javascript
	window.location.href = window.location.href; //this is a possibility
	window.location.reload(); //another possiblity
	history.go(0);
	*/
		
	$('#googlecart-add').click(function(){
		
		checkNames();
		
		$('#product-title').val($('#select_class option:selected').val());
		var prDesc = $('#select_day_time option:selected').val();
		$('.product-attr-description').val(prDesc + ", " + window.skaterName + ", " + window.itemCount);
		
	});    	
	
});



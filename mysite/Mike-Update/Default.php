<?php
function check_user_agent ( $type = NULL ) { 
        $user_agent = strtolower ( $_SERVER['HTTP_USER_AGENT'] ); 
        if ( $type == 'bot' ) { 
                // matches popular bots 
                if ( preg_match ( "/googlebot|adsbot|yahooseeker|yahoobot|msnbot|watchmouse|pingdom\.com|feedfetcher-google/", $user_agent ) ) { 
                        return true; 
                        // watchmouse|pingdom\.com are "uptime services" 
                } 
        } else if ( $type == 'browser' ) { 
                // matches core browser types 
                if ( preg_match ( "/mozilla\/|opera\//", $user_agent ) ) { 
                        return true; 
                } 
        } else if ( $type == 'mobile' ) { 
                // matches popular mobile devices that have small screens and/or touch inputs 
                // mobile devices have regional trends; some of these will have varying popularity in Europe, Asia, and America 
                // detailed demographics are unknown, and South America, the Pacific Islands, and Africa trends might not be represented, here 
                if ( preg_match ( "/phone|iphone|itouch|ipod|symbian|android|htc_|htc-|palmos|blackberry|opera mini|iemobile|windows ce|nokia|fennec|hiptop|kindle|mot |mot-|webos\/|samsung|sonyericsson|^sie-|nintendo/", $user_agent ) ) { 
                        // these are the most common 
                        return true; 
                } else if ( preg_match ( "/mobile|pda;|avantgo|eudoraweb|minimo|netfront|brew|teleca|lg;|lge |wap;| wap /", $user_agent ) ) { 
                        // these are less common, and might not be worth checking 
                        return true; 
                } 
        } 
        return false; 
} 

$ismobile = check_user_agent('mobile'); 
if($ismobile) { 
header('Location: http://lloydcenterice.info/Mike-Update/m/Lloyd_Center_Ice.html'); 
} /*else { 
header('Location: http://www.google.com'); 
}*/ 



?> 



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">



<html xmlns="http://www.w3.org/1999/xhtml">

<!-- #BeginTemplate "Master.dwt" -->

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<!-- #BeginEditable "title" -->
<title>Lloyd Center Ice Rink</title>
<!-- #EndEditable -->
<link rel="stylesheet" href="CSS/page.css" type="text/css" />
</head>

<body>
<div id="pageWrapper">
	<div id="header">
		<img class="headIcon" src="images/UpdatedLloydCenterLogoNoWords.gif" width="108px" height="120px" alt="Lloyd Center Ice" />
		<p class="bigTitle">Lloyd Center Ice Rink</p>
		<p class="tinyTitle">(503) 288-6073 | fax (503) 288-6940</p>
	</div>
	<div id="contentWrapper">
		<div id="navigation">
			<ul>
				<li><a href="Default.html">Home</a></li>
				<li><a href="SkateLessons.html">Skating Lessons</a></li>
				<li><a href="PublicSessions.html">Public Sessions</a></li>
				<li><a href="Birthdays.html">Birthdays</a></li>
				<li><a href="Calendar.html">Calendar</a></li>
				<li><a href="KoolKamp.html">Kool Kamp</a></li>
				<li><a href="GroupRates.html">Group Rates</a></li>
				<li><a href="IceRentals.html">Private Ice Rentals</a></li>
				<li><a href="BroomBall.html">Broomball</a></li>
				<li><a href="Freestyles.html">Freestyles</a></li>
				<li><a href="ICC.html">Ice Crystal Classic</a></li>
				<li><a href="Curling.html">Curling</a></li>
				<li><a href="Sponsorship.html">Sponsorship</a></li>
				<li><a href="Contact.html">Contact</a></li>
				<li><a href="Directions.html">Driving Directions</a></li>
				<li><a href="SkateVideos.html">How-to Videos</a></li>
			</ul>
		</div>
		<br />
		
		
		<!-- #BeginEditable "content" -->
		<div id="content">
			<p class="pageTitle">Home</p>	
		</div>
		<!-- #EndEditable -->
		<div id="rsidebar">
				<ul style="list-style-type:none;">
					<li>
						<a href="SkatingLessons/sched.html">Skate School Sign Up</a>
						<p>First Classes for New Session start July 23 to July 28</p>
					</li>
					<li>
						<a href="KoolKamp.html">Kool Kamp 2012 Sign Up</a>
						<p>Week 5 Session: 07/16 - 07/20</p>
					</li>
					<li>
						<a href="PublicSessions.html">Public Sessions</a>
						<p>Check out our new rental skates!</p>
					</li>
				</ul>				
		</div><!-- //rsidebar -->
		<br clear="all" />
	</div><!-- contentWrapper-->
	<div id="footer">
		<p class="footIcon" style="text-align:center">
			<a href="http://www.rinkmanagement.com /">
			<img class="footIcon" alt="Rink Management Services Corporation" height="59" src="images/RMS.JPG" width="213" /></a>
		</p>
		<p style="text-align:center">
		<a href="Default.html">Home</a> | <a href="about/default.html">About</a> 
			| <a href="">Calendar</a> |
			<a href="">Contact</a>&nbsp; |
			<a href="">Employment</a> |
			<a href="">FAQ</a> |
			<a href="">Information Links</a> |
			<a href="">Donation Requests</a> | 
			<a href="">Products</a> | <a href="">Promotions</a> |
			<a href="site_map/default.html">Site Map</a><br />
			Copyright © 2005-2012 Lloyd Center Ice Rink. All Rights Reserved.
		</p>
	</div>
</div>
</body>

<!-- #EndTemplate -->

</html>

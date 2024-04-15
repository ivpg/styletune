$(document).ready(function() { 

	var password;

	var pass1="Z2Sd3HFgdd";

	password=prompt('Please enter your password to view this page!',' ');

	if (password==pass1)
	  	window.location="./Dataset.html";
	else
    {
 	  	window.location="./index.html";
    }
});

        
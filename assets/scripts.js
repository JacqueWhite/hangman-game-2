// ask the user's name only on the homepage...
$( function() {
	if ($('body').is('#welcome')) {
		var name = prompt("What is your name?");
		$("#userName").html(name);
	}
});










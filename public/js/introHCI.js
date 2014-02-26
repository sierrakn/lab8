'use strict';

var startTime;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	startTime = new Date().getTime();
});

$(".likeBtn").click(function() {
	ga("send", "event", "like", "click");
	var endTime = new Date().getTime();
	var timeSpent = endTime - startTime;

	ga('send', 'timing', 'jQuery', 'Like a Project', timeSpent);
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}
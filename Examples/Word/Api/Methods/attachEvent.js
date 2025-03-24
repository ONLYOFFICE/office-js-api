// This example shows how to subscribe to the hyperlink click event.

// How to attach the "asc_onHyperlinkClick" event.

// Subscribes to the "asc_onHyperlinkClick" event and calls the callback function which displays the "HYPERLINK!!!" message in the console log when the event fires.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
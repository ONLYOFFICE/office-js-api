// Subscribe to the hyperlink click event in a document.

// How to attach the "asc_onHyperlinkClick" event in a document.

// Subscribes to the "asc_onHyperlinkClick" event and calls the callback function which displays the "HYPERLINK!!!" message in the console log when the event fires in a document.

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
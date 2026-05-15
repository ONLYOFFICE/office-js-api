// Subscribe to the hyperlink click event in a presentation.

// Event handlers allow responding to user interactions like clicks on hyperlinks.

// Attach a listener to the asc_onHyperlinkClick event using Api.attachEvent().

Api.attachEvent("asc_onHyperlinkClick", function() {
	console.log("HYPERLINK!!!");
});
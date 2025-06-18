// This example specifies that all the small letter characters in the text run are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

// How to make text characters uncapitalized.

// Create a text run object, update its style by making its letters uncapitalized.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSmallCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font set to small capitalized letters.");
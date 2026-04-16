// Set the text spacing measured in twentieths of a point in a document.

// How to set the text spacing size in a document.

// Create a text run object, update its spacing in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
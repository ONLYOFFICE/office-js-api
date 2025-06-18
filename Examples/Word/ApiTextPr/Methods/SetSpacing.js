// This example sets the text spacing measured in twentieths of a point.

// How to set the text spacing size.

// Create a text run object, update its spacing.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetSpacing(80);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the spacing set to 4 points (80 twentieths of a point).");
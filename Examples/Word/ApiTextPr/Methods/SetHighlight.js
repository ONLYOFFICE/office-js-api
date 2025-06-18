// This example specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.

// How to color a text object background.

// Create a text run object, add color to its background.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
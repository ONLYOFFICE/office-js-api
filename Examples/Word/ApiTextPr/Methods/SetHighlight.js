// This example specifies a highlighting color which is added to the text properties and applied as a background to the contents of the current run/range/paragraph.
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetHighlight("lightGray");
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text highlighted with light gray color using the text properties.");
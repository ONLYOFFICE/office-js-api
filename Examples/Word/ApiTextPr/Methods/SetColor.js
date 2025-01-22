// This example sets the text color for the current text run in the RGB format.
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetColor(255, 111, 61, false);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the color set to orange using the text properties.");
// This example sets the text color to the current paragraph in the RGB format.

// Color the paragraph text with orange.

// Get the first paragraph and make its font color orange.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font color set to orange.");
paragraph.SetColor(255, 111, 61);
// This example sets the text color to the current paragraph in the RGB format.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the font color set to orange.");
paragraph.SetColor(255, 111, 61);
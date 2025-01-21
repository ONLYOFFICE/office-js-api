// This example sets the font size to the characters of the paragraph.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample paragraph with the font size set to 24 points.");
paragraph.SetFontSize(48);
// This example specifies that the contents of this paragraph are displayed with two horizontal lines through each character displayed on the line.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with two lines.");
paragraph.SetDoubleStrikeout(true);
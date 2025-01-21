// This example specifies that the contents of this paragraph are displayed with a single horizontal line through the center of the line.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the text struck out with a single line.");
paragraph.SetStrikeout(true);
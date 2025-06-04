// This example specifies that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line.

// How to strikethrough a text with two lines.

// Create a text run object, double cross out it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);
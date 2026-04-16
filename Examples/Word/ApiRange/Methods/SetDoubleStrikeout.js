// Specify that the contents of the current Range are displayed with two horizontal lines through each character displayed on the line in a document.

// How to strikethrough a text with two lines in a document.

// Create a text run object, double cross out it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetDoubleStrikeout(true);
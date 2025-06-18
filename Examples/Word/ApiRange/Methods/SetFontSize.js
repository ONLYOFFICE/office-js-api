// This example sets the font size to the characters of the text Range.

// How to change the range text font size.

// Get a range, resize its font.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
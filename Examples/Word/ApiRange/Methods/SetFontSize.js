// Set the font size to the characters of the text Range in a document.

// How to change the range text font size in a document.

// Get a range, resize its font in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetFontSize(14);
// Specify a highlighting color which is applied as a background to the contents of the Range in a document.

// How to color a range background in a document.

// Create a range and add color to its background in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");
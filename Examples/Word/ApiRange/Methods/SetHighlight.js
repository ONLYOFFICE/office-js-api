// This example specifies a highlighting color which is applied as a background to the contents of the Range.

// How to color a range background.

// Create a range and add color to its background.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");
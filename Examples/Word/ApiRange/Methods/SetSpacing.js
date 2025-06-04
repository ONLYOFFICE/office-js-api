// This example sets the text spacing measured in twentieths of a point.

// How to set the range text spacing size.

// Get a range text, update its spacing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetSpacing(2);
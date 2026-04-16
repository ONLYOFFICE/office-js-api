// Set the text spacing measured in twentieths of a point in a document.

// How to set the range text spacing size in a document.

// Get a range text, update its spacing in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetSpacing(2);
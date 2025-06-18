// This example deletes all the contents from the range.

// How to clear the content of the range.

// Delete the text from the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
// Delete all the contents from the range in a document.

// How to clear the content of the range in a document.

// Delete the text from the content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
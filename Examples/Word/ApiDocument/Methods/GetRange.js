// Get a Range object that represents the part of the document contained in the specified document in a document.

// How to get the range using row and column indexes in a document.

// Make a range text bold using the document API in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);
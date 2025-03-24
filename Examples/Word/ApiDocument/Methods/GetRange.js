// This example shows how to get a Range object that represents the part of the document contained in the specified document.

// How to get the range using row and column indexes.

// Make a range text bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text.");
let range = doc.GetRange(8, 11);
range.SetBold(true);
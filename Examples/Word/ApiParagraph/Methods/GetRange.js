// Get a Range object that represents the part of the doc contained in the specified paragraph in a document.

// How to get the range where the paragraph is located in a document.

// Get the paragraph range and make it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
let range = paragraph.GetRange(8, 11);
range.SetBold(true);
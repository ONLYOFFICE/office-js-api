// This example inserts an array of elements into the current position of the document.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
doc.InsertContent([paragraph]);
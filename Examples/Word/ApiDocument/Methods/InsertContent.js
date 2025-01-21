// This example inserts an array of elements into the current position of the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
document.InsertContent([paragraph]);
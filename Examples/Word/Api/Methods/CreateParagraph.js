// This example creates a new paragraph and inserts it into the document.
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph");
doc.Push(paragraph);
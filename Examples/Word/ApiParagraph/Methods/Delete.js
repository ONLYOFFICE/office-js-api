// Remove a paragraph from the content of a document.

// How do I delete a specific paragraph in a document?

// Clean up unwanted text blocks by eliminating a paragraph in a document.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
doc.Push(paragraph2);
paragraph1.Delete();
paragraph2.AddLineBreak();
paragraph2.AddText("The sample paragraph №1 was removed.");
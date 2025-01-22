// This example shows how to get the last document element.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
doc.Push(paragraph);
let element = doc.Last();
element.SetBold(true);
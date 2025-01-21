// This example shows how to get the last document element.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
document.Push(paragraph);
let element = document.Last();
element.SetBold(true);
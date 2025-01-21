// This example shows how to get the previous paragraph.
let document = Api.GetDocument();
let paragraph1 = document.GetElement(0);
paragraph1.AddText("This is just a sample paragraph №1.");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is just a sample paragraph №2.");
document.Push(paragraph2);
let previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);
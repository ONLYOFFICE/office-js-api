// This example creates a new history point.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a sample text.");
document.CreateNewHistoryPoint();
paragraph = Api.CreateParagraph();
paragraph.AddText("New history point was just created.");
document.Push(paragraph);
// This example removes the current selection.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Api ONLYOFFICE");
let range = document.GetRange(0, 2);
range.Select();
document.RemoveSelection();
paragraph = Api.CreateParagraph();
paragraph.AddText("The selection from the word 'Api' was removed.");
document.Push(paragraph);
// This example removes the current selection.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api ONLYOFFICE");
let range = doc.GetRange(0, 2);
range.Select();
doc.RemoveSelection();
paragraph = Api.CreateParagraph();
paragraph.AddText("The selection from the word 'Api' was removed.");
doc.Push(paragraph);
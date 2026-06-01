// Delete the currently selected text range in a document.

// How do I remove a selected portion of text in a document?

// Programmatically select a range and then erase it to trim content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api ONLYOFFICE");
let range = doc.GetRange(0, 2);
range.Select();
doc.RemoveSelection();
paragraph = Api.CreateParagraph();
paragraph.AddText("The selection from the word 'Api' was removed.");
doc.Push(paragraph);
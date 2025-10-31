// This example shows how to get the text from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('ONLYOFFICE Document Builder is a powerful tool.');

const range = paragraph.GetRange(0, 28);
range.Select();

const selection = doc.GetSelection();
const selectedText = selection.GetText();

paragraph = Api.CreateParagraph();
paragraph.AddText('Selected text: ' + selectedText);
doc.Push(paragraph);

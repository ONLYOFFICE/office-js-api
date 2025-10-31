// This example shows how to get an array of paragraphs from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('First paragraph with some text.');

paragraph = Api.CreateParagraph();
paragraph.AddText('Second paragraph here.');
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText('Third paragraph content.');
doc.Push(paragraph);

const range = doc.GetRange(0, 70);
range.Select();

const selection = doc.GetSelection();
const paragraphs = selection.GetParagraphs();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of paragraphs in selection: ' + paragraphs.length);
doc.Push(paragraph);

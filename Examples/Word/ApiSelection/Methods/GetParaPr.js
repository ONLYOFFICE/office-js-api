// This example shows how to get the paragraph formatting properties of the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.SetJc('center');
paragraph.AddText('This paragraph is centered.');

paragraph.Select();

const selection = doc.GetSelection();
const paraPr = selection.GetParaPr();
const alignment = paraPr.GetJc();

paragraph = Api.CreateParagraph();
paragraph.AddText('Paragraph alignment: ' + alignment);
doc.Push(paragraph);

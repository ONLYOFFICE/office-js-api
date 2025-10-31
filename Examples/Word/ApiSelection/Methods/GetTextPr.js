// This example shows how to get the text properties of the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const run1 = Api.CreateRun();
run1.AddText('This is normal text. ');
paragraph.AddElement(run1);

const run2 = Api.CreateRun();
run2.SetBold(true);
run2.AddText('This is bold text.');
paragraph.AddElement(run2);

run2.Select();

const selection = doc.GetSelection();
const font = selection.GetTextPr();
const isBold = font.GetBold();

paragraph = Api.CreateParagraph();
paragraph.AddText('Is selected text bold? ' + isBold);
doc.Push(paragraph);

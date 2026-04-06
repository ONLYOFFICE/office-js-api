// This example shows how to get the currently selected content control from a document.

const doc = Api.GetDocument();

const inlineSdt = doc.AddCheckBoxContentControl();
inlineSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);

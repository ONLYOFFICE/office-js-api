// Get the currently selected content control from a document in a document.

// How do I get current content control in a document?

// Get current content control using a document object.

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
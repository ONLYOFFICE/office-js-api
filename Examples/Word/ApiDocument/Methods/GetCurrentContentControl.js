// Retrieve the content control that is currently selected in a document.

// How do I get the active content control at the cursor position in a document?

// Check which control the user is interacting with by reading the current selection in a document.

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
// Retrieve the currently selected content control in a document.

// How do I get the content control that is active at the cursor position in a document?

// Verify which control is selected before applying conditional formatting or reading its contents.

const doc = Api.GetDocument();

const blockSdt = Api.CreateBlockLvlSdt();
blockSdt.GetContent().GetElement(0).AddText('Content inside the control.');
doc.AddElement(0, blockSdt);

blockSdt.Select();
const currentCC = doc.GetCurrentContentControl();

const paragraph = Api.CreateParagraph();
if (currentCC) {
	paragraph.AddText('Current content control class: ' + currentCC.GetClassType());
} else {
	paragraph.AddText('No content control is selected.');
}
doc.Push(paragraph);
// This example shows how to get the currently selected content control.

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

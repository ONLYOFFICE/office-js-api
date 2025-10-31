// This example shows how to get the style applied to the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const heading1Style = doc.GetStyle('Heading 1');
paragraph.SetStyle(heading1Style);
paragraph.AddText('This is Heading 1 style');

paragraph.Select();

const selection = doc.GetSelection();
const style = selection.GetStyle();

paragraph = Api.CreateParagraph();
if (style) {
	paragraph.AddText('Style name: ' + style.GetName());
} else {
	paragraph.AddText('No style applied.');
}
doc.Push(paragraph);

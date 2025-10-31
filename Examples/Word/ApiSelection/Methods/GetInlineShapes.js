// This example shows how to get a collection of inline shapes from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('Here is an inline image: ');

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
paragraph.AddText(' in the text.');

paragraph.Select();

const selection = doc.GetSelection();
const inlineShapes = selection.GetInlineShapes();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of inline shapes in selection: ' + inlineShapes.GetCount());
doc.Push(paragraph);

// This example shows how to get a collection of floating shapes from the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This document contains a floating shape.');

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
image.SetWrappingStyle('square');
paragraph.AddDrawing(image);

image.Select();

const selection = doc.GetSelection();
const shapeRange = selection.GetShapeRange();

paragraph = Api.CreateParagraph();
paragraph.AddText('Number of floating shapes in selection: ' + shapeRange.GetCount());
doc.Push(paragraph);

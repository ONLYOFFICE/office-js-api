// This example shows how to convert millimeters to pixels.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);

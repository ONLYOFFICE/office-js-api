// This example shows how to convert millimeters to points.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + points + ' points.');
doc.Push(paragraph);

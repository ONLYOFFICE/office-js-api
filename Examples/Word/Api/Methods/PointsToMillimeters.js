// This example shows how to convert points to millimeters.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
paragraph.AddText(points + ' points are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);

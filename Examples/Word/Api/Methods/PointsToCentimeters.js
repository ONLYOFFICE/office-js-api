// This example shows how to convert points to centimeters.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');
doc.Push(paragraph);

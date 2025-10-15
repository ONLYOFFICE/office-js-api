// This example shows how to convert points to inches.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const inches = Api.PointsToInches(points);
paragraph.AddText(points + ' points are equal to ' + inches + ' inches.');
doc.Push(paragraph);

// This example shows how to convert points to lines.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);

// This example shows how to convert points to pixels.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const pixels = Api.PointsToPixels(points);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);

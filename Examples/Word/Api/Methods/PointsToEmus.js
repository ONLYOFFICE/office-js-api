// This example shows how to convert points to emus.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const emus = Api.PointsToEmus(points);
paragraph.AddText(points + ' points are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);

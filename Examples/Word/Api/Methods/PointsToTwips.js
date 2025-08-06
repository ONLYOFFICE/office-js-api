// This example shows how to convert points to twips.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);

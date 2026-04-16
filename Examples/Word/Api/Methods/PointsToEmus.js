// Convert points to emus in a document.

// How to convert points to emus in a document?

// Convert points to emus using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const emus = Api.PointsToEmus(points);
paragraph.AddText(points + ' points are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
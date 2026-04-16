// Convert points to pixels in a document.

// How to convert points to pixels in a document?

// Convert points to pixels using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const pixels = Api.PointsToPixels(points);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
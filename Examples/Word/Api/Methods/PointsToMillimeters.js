// Convert points to millimeters in a document.

// How to convert points to millimeters in a document?

// Convert points to millimeters using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
paragraph.AddText(points + ' points are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
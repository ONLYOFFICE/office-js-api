// Convert a measurement from points to millimeters in a document.

// How do I convert points to millimeters in a document?

// Display the millimeter equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const millimeters = Api.PointsToMillimeters(points);
paragraph.AddText(points + ' points are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
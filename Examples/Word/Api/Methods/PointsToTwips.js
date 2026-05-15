// Convert a measurement from points to twips in a document.

// How do I convert points to twips in a document?

// Display the twip equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);
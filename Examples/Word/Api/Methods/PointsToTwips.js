// Convert points to twips in a document.

// How do I convert points to twips in a document?

// Convert points to twips and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);
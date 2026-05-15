// Convert a typographic point value to inches and display the result in a document.

// How do I find the inch equivalent of a measurement given in points in a document?

// Write out the inch value that corresponds to a specific number of points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const inches = Api.PointsToInches(points);
paragraph.AddText(points + ' points are equal to ' + inches + ' inches.');
doc.Push(paragraph);
// Convert points to lines in a document.

// How can I convert points to lines in a document?

// Convert points to lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);
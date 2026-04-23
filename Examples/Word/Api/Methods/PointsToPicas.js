// Convert a measurement from points to picas in a document.

// How do I convert points to picas in a document?

// Display the pica equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 42;
const picas = Api.PointsToPicas(points);
paragraph.AddText(points + ' points are equal to ' + picas + ' picas.');
doc.Push(paragraph);
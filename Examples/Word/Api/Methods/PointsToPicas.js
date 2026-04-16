// Convert points to picas in a document.

// How can I convert points to picas in a document?

// Convert points to picas in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 42;
const picas = Api.PointsToPicas(points);
paragraph.AddText(points + ' points are equal to ' + picas + ' picas.');
doc.Push(paragraph);
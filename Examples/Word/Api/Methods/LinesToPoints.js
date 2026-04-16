// Convert lines to points in a document.

// How do I convert lines to points in a document?

// Convert lines to points and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const lines = 100;
const points = Api.LinesToPoints(lines);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');
doc.Push(paragraph);
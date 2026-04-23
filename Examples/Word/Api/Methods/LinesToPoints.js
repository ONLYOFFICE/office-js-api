// Convert a measurement from lines to points in a document.

// How do I convert lines to points in a document?

// Display the equivalent point value for a given number of lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const lines = 100;
const points = Api.LinesToPoints(lines);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');
doc.Push(paragraph);
// Convert a measurement from inches to points in a document.

// How do I convert inches to points in a document?

// Display the equivalent point value for a given number of inches in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const inches = 100;
const points = Api.InchesToPoints(inches);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');
doc.Push(paragraph);
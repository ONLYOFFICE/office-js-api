// Convert inches to points in a document.

// How can I convert inches to points in a document?

// Convert inches to points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const inches = 100;
const points = Api.InchesToPoints(inches);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');
doc.Push(paragraph);
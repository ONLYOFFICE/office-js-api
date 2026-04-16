// Convert centimeters to points in a document.

// How to convert centimeters to points in a document?

// Convert centimeters to points using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
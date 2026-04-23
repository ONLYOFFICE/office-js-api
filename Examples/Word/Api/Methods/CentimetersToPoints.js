// Display the points equivalent of a centimeter value in a document.

// How do I convert a measurement from centimeters to points in a document?

// Insert the result of a centimeters-to-points conversion as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const centimeters = 1000;
const points = Api.CentimetersToPoints(centimeters);
paragraph.AddText(centimeters + ' centimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
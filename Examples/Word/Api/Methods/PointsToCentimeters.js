// Convert points to centimeters in a document.

// How do I convert points to centimeters in a document?

// Convert points to centimeters and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');
doc.Push(paragraph);
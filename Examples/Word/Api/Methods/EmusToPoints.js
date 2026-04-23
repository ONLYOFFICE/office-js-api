// Convert a measurement from EMUs to points in a document.

// How do I convert EMUs to points in a document?

// Display the equivalent point value for a given number of EMUs in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);
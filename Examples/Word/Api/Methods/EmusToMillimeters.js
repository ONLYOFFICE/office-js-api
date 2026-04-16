// Convert emus to millimeters in a document.

// How do I convert emus to millimeters in a document?

// Convert emus to millimeters and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
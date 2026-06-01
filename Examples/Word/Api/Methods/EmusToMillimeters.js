// Display a measurement converted from internal units to millimeters in a document.

// How do I show a size value in millimeters inside a document?

// Write the millimeter equivalent of a raw numeric measurement into a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
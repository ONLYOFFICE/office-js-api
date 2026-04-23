// Convert a millimeter value to English metric units and display the result in a document.

// How do I translate a measurement from millimeters to English metric units in a document?

// Show the equivalent English metric unit value for a given number of millimeters in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');
doc.Push(paragraph);
// Convert millimeters to emus in a document.

// How do I convert millimeters to emus in a document?

// Convert millimeters to emus and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');
doc.Push(paragraph);
// This example shows how to convert millimeters to emus.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');
doc.Push(paragraph);

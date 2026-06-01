// Convert a millimeter measurement to pixels and display the result in a document.

// How do I find the pixel equivalent of a measurement given in millimeters in a document?

// Show how many pixels correspond to a specific number of millimeters in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
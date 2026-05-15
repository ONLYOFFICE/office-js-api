// Convert a pixel value to English metric units and display the result in a document.

// How do I find the English metric unit equivalent of a pixel measurement in a document?

// Show the English metric unit value that matches a given number of pixels in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
// Convert a pixel measurement to typographic points and display the result in a document.

// How do I translate a pixel value into points in a document?

// Write out the point equivalent of a given pixel count as readable text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');
doc.Push(paragraph);
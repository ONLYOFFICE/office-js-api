// Convert pixels to points in a document.

// How to convert pixels to points in a document?

// Convert pixels to points using the document API.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');
doc.Push(paragraph);
// This example shows how to convert pixels to english metric units.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);

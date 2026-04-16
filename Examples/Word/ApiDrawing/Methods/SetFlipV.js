// Set the vertical flip for a drawing in a document.

// How to set flip v for a drawing object in a document?

// Set flip v and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(90, 140, 120));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('upArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(80), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipV(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped vertically.');
doc.Push(paragraph2);
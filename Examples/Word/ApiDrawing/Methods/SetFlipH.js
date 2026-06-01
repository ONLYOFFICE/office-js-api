// Flip a drawing horizontally in a document.

// How do I mirror a shape along its vertical axis in a document?

// Produce a mirrored copy of an arrow to compare original and flipped orientations in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const fill = Api.CreateSolidFill(Api.RGB(100, 130, 170));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rightArrow', Api.MillimetersToEmus(40), Api.MillimetersToEmus(20), fill, stroke);
paragraph.AddDrawing(drawing);

const flippedDrawing = drawing.Copy();
flippedDrawing.SetFlipH(true);
paragraph.AddDrawing(flippedDrawing);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('The right arrow shape above is flipped horizontally.');
doc.Push(paragraph2);
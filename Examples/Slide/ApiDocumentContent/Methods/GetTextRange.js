// Take a text range over the whole text of a shape on a slide and make it bold.

// The text of a shape is addressed by character positions, so a range can cover any part of it.

// Get the range of the shape text body and apply bold to the first word.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = docContent.GetTextRange(0, 5);
range.SetBold(true);
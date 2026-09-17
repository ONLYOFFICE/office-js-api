// Take a text range over the whole text of a shape on a PDF page and make it bold.

// The text of a shape is addressed by character positions, so a range can cover any part of it.

// Get the range of the shape text body and apply bold to the first word.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = docContent.GetTextRange(0, 5);
range.SetBold(true);
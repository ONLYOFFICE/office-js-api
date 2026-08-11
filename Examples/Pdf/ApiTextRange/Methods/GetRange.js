// Create a sub-range from an existing text range using relative offsets.

// Useful for narrowing a range down to a smaller portion of text.

// Get the sub-range "World" from "Hello World" and select it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
page.AddObject(shape);

const range = shape.GetTextRange();
const sub = range.GetRange(6, 11);
sub.SetBold(true);

// Expand two overlapping or adjacent text ranges into a single union range.

// Useful for merging adjacent or overlapping selections into one range.

// Create two sub-ranges and expand them into one union range.

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
const range1 = range.GetRange(0, 5);
const range2 = range.GetRange(6, 11);

const union = range1.ExpandTo(range2);
union.Select()

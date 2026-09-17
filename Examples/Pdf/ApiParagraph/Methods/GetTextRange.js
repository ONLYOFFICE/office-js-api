// Underline a part of a paragraph of a shape on a PDF page through a text range.

// Positions are counted from the beginning of the paragraph, the end position is excluded.

// Take the range of the first five characters of the paragraph and underline it.

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

const range = paragraph.GetTextRange(0, 5);
range.SetUnderline(true);
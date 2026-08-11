// Delete the characters covered by a text range in a PDF shape.

// Useful for removing a portion of a shape's text without recreating the whole run.

// Select the first five characters of the text and delete them.

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
const sub = range.GetRange(0, 5);
const deleted = sub.Delete();

// Select the text covered by a range in the PDF editor.

// Useful for highlighting a range for the user to see in the editor view.

// Select the text range in the PDF editor view.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be selected programmatically.");
page.AddObject(shape);

const range = shape.GetTextRange();
range.Select();

// Replace all occurrences of a word within a text range.

// Useful for bulk text substitution inside a shape.

// Replace every occurrence of "foo" with "bar".

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("foo bar foo");
page.AddObject(shape);

const range = shape.GetTextRange();
range.Replace("foo", "bar");

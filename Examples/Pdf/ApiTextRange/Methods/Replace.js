// Replace every occurrence of a word inside a text range in a shape on a PDF page.

// The replacement keeps the formatting of the text it replaces.

// Replace every occurrence of "foo" with "bar".

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("foo bar foo");

const range = shape.GetTextRange();

range.Replace("foo", "bar");

const reportFill = Api.CreateSolidFill(Api.CreateRGBColor(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("Replace: " + shape.GetTextRange().GetText());
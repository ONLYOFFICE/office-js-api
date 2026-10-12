// Check whether a drawing on a PDF page can carry text before working with it.

// Images and tables have no text body, so the check tells a text drawing from the others.

// Show the answer in a second drawing before and after the text body is created.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 150 * 36000, 65 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);

const reportParagraph = report.GetContent().GetElement(0);
reportParagraph.AddText("before: " + shape.HasTextContent());

shape.GetTextRange().SetText("Sample");

reportParagraph.AddText(" after: " + shape.HasTextContent());

// Take one paragraph covered by a text range in a shape on a PDF page.

// A range may span several paragraphs, which are addressed by index.

// Append text to the second paragraph of the range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
docContent.GetElement(0).AddText("First paragraph");
const secondPara = Api.CreateParagraph();
secondPara.AddText("Second paragraph");
docContent.Push(secondPara);
const thirdPara = Api.CreateParagraph();
thirdPara.AddText("Third paragraph");
docContent.Push(thirdPara);

const range = shape.GetTextRange();

const secondParagraph = range.GetParagraph(1);
secondParagraph.AddText(" (edited)");

const reportFill = Api.CreateSolidFill(Api.CreateRGBColor(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetParagraph: " + secondParagraph.GetText({ "NewLineSeparator": "" }));
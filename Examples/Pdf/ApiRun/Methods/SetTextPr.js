// Adjust multiple text characteristics at once in a PDF.

// Which properties can I modify for text in a PDF?

// Set font size, weight, and other text attributes in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");

const textPr = run.GetTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
run.SetTextPr(textPr);
paragraph.AddElement(run);
page.AddObject(shape);
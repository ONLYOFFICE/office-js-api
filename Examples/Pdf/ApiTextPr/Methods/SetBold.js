// Make text appear in bold weight in a PDF.

// How do I apply bold formatting to text in a PDF?

// Enable bold styling for characters displayed in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetBold(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font weight set to bold using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
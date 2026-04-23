// Convert lowercase letters to small capitals in a PDF.

// How do I display text in small capital letters in a PDF?

// Transform regular text to display as smaller uppercase characters in a PDF.

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
textPr.SetSmallCaps(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font set to small capitalized letters using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
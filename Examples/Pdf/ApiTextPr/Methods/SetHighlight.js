// Add a background color to text in a PDF.

// How do I add highlighting to text in a PDF?

// Apply a colored background to selected text in a PDF.

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
textPr.SetHighlight("lightGray");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the text highlighted with light gray color using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);
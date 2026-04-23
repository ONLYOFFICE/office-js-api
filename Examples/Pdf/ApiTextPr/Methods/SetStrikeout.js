// Draw a line through text in a PDF.

// How do I add strikethrough formatting to text in a PDF?

// Cross out text with a horizontal line in a PDF.

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
textPr.SetStrikeout(true);
paragraph.SetJc("left");
run.AddText("This is a struck out text inside the shape.");
paragraph.AddElement(run);
page.AddObject(shape);
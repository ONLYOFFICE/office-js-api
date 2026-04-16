// Set the font size to the characters of the current text run in a PDF document.

// How to set font size to the text run in a PDF document.

// Create a new text run and change resize its font in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontSize(50);
run.AddText("This is a text run with the font size set to 25 points (50 half-points).");
paragraph.AddElement(run);
page.AddObject(shape);
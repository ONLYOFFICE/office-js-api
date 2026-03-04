// This example sets all 4 font slots with the specified font family.

// How to change a text font family.

// Get the text properties of the run and set its font family.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetFontFamily("Comic Sans MS");
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font family set to 'Comic Sans MS' using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);

// This example sets the text fill to the current text run.

// How to fill a text run.

// Create a new text run and set its font color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
const runTextFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
run.SetTextFill(runTextFill);
run.AddText("This is a text run with the black text.");
paragraph.AddElement(run);
page.AddObject(shape);

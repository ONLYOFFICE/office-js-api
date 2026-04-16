// Get the RGB components of the color in a PDF document.

// How to get the hex for a color in a PDF document?

// Get the hex and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const rgbColor = Api.RGB(255, 0, 0);
const rgbColorHex = rgbColor.GetHex();
run.SetFontSize(30);
run.AddText('Hex of rgbColor: ' + rgbColorHex);
paragraph.AddElement(run);
page.AddObject(shape);
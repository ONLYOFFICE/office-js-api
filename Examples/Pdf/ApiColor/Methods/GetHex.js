// Get the hex color value in a PDF.

// How do I convert a color to hex format in a PDF?

// Retrieve the hex code and display it as text in the PDF.

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
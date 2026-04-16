// Get the RGBA components of a shape fill color in a PDF document.

// How to get the r g b a for a color in a PDF document?

// Get the r g b an and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const rgba = color.GetRGBA();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('RGBA: ' + rgba.r + ', ' + rgba.g + ', ' + rgba.b + ', ' + rgba.a);
paragraph.AddElement(run);
page.AddObject(shape);
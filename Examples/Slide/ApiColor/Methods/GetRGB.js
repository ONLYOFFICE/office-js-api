// This example shows how to get the RGB components of a shape fill color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.HexColor('#FF0000');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const rgb = color.GetRGB();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('RGB: ' + rgb.r + ', ' + rgb.g + ', ' + rgb.b);
paragraph.AddElement(run);
slide.AddObject(shape);

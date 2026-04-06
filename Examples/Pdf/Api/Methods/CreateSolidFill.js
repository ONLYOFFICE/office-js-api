// This example shows how to create a solid fill.

// How to color a background.

// Add solid fill color as a shape background.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgbColor = Api.RGB(255, 111, 61);
const fill = Api.CreateSolidFill(rgbColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

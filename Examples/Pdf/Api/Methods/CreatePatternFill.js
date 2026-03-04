// This example creates a pattern fill and applies it to the object using the selected pattern as the object background.

// How to apply pattern to the background of a drawing.

// Change color of an element using a pattern fill.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

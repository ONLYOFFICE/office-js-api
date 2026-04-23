// Apply a pattern fill to a shape in a PDF.

// How do I add a pattern background to a drawing in a PDF?

// Fill a shape with a repeating pattern using custom colors in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
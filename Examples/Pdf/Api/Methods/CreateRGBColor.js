// Use an RGB color in a gradient fill in a PDF.

// How do I define a custom color using red, green, and blue values in a PDF?

// Create a gradient stop with an RGB color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgbColor = Api.RGB(255, 111, 61);
const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(rgbColor, 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);
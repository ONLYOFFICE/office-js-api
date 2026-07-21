// Find out what type of color object an RGB color is in a PDF.

// How do I check the category of an RGB color in a PDF?

// Determine the classification of a red-green-blue color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgbColor = Api.CreateRGBColor(255, 213, 191);
const gs1 = Api.CreateGradientStop(rgbColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
const classType = rgbColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
// Check the class type returned by a preset color in a PDF document.

// How do I check what type a preset color object is in a PDF document?

// Retrieve and output the class type string for a preset color in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const presetColor = Api.CreatePresetColor("peachPuff");
const gs1 = Api.CreateGradientStop(presetColor, 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetContent();
const classType = presetColor.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
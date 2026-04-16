// Retrieve the class type of a stroke in a PDF document.

// How to identify the class type of a stroke in a PDF document?

// Obtain the class type identifier of a stroke object in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const fill1 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(3 * 36000, fill1);
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);

const classType = stroke.GetClassType();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
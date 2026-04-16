// Check the class type returned by a shape in a PDF document.

// How do I check what type a shape object is in a PDF document?

// Retrieve and output the class type string for a shape in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const classType = shape.GetClassType();
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
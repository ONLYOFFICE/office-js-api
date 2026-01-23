// How to get a class type of ApiDrawing.

// Retrieve class type of ApiDrawing object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
drawing.SetPosition(48, 100);
page.AddObject(drawing);

const aDrawings = page.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
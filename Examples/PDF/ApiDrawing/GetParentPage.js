// How to get a parent page of a page shape.

// Get a parent page knowing a shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
shape.SetPosition(48, 100);

page.AddObject(shape);

const parentPage = shape.GetParentPage();
const sType = parentPage.GetClassType();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The index of the shape parent page = " + parentPage.GetIndex());

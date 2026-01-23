// How to find a shape's width and display it on the page.

// Get a page shape's width.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
shape.SetPosition(48, 100);

const width = shape.GetWidth();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing width: " + width);
page.AddObject(shape);

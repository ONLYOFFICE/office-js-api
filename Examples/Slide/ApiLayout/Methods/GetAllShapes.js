// Get all shape objects from a slide layout as an array.

// Shapes in layouts can be retrieved and their content modified.

// Add text content to the first shape in the layout.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

layout.AddObject(shape);
const shapes = layout.GetAllShapes();
const docContent = shapes[0].GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This is a sample shape which was added to the current layout.");
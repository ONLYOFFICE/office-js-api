// Get a lock setting for a shape in a presentation.

// How do I find the lock status of an object in a presentation?

// Retrieve and display the lock value of a shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetLockValue("noSelect", true);

const docContent = shape.GetContent();
const lockValue = shape.GetLockValue("noSelect");
const paragraph = docContent.GetElement(0);
paragraph.AddText("This drawing cannot be selected: " + lockValue);
docContent.AddElement(0, paragraph);
slide.AddObject(shape);
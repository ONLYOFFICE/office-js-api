// This example gets a lock value of a shape and inserts it into the presentation.

// How to get a slide shape's lock value and display it in the slide.

// Get a slide shape's lock value.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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

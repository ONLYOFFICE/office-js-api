// Retrieve the index position of the current slide.

// Find the zero-based index of the slide being edited.

// Display the current slide index value in a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const currentSlideIndex = presentation.GetCurSlideIndex();
paragraph.AddText("Current Slide Index = " + currentSlideIndex);
slide.AddObject(shape);
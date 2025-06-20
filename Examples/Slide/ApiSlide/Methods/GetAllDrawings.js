// This example show how to get an array with all the drawing objects from the slide.

// How to get all drawings from the slide.

// Get all drawings from the slide as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const allDrawings = slide.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("chart");
allDrawings[0].SetPlaceholder(placeholder);

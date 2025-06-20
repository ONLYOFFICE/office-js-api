// This example shows how to get an array with all the drawing objects from the slide master.

// How to get all drawings from the master of presentation.

// Get all drawings from the presentation as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.RemoveAllObjects();
master.AddObject(drawing);

const allDrawings = master.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("picture");
allDrawings[0].SetPlaceholder(placeholder);

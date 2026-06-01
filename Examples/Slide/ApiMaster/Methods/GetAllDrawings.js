// Retrieve all drawings from a slide master in a presentation.

// How do I find all drawing objects on a slide master in a presentation?

// List every drawing in a slide master in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.RemoveAllObjects();
master.AddObject(drawing);

const allDrawings = master.GetAllDrawings();
const placeholder = Api.CreatePlaceholder("picture");
allDrawings[0].SetPlaceholder(placeholder);
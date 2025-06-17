// This example shows how to get an array with all the shape objects from the slide.

// How to get all shapes from the slide.

// Get all shapes from the slide as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(shape);

const allShapes = slide.GetAllShapes();
allShapes[0].SetSize(150 * 36000, 65 * 36000);

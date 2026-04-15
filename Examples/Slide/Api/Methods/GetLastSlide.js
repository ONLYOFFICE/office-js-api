// This example shows how to get the last slide of the presentation.

// How to get the last slide using the Api global object.

// Get the last slide and add a shape to it.

const presentation = Api.GetPresentation();
const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

const slide = Api.GetLastSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

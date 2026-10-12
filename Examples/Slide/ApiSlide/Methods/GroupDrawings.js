// Group multiple shape objects into a single group.

// Create and position two shapes on the slide.

// Combine them using the GroupDrawings method.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill2, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
shape2.SetPosition(120 * 36000, 75 * 36000);
slide.AddObject(shape1);
slide.AddObject(shape2);
slide.GroupDrawings([shape1, shape2]);
// This example shows how to group drawings on slide.

// How to group two shapes.

// Create two ApiShape objects and group them.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill1 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.CreateRGBColor(111, 255, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill2, stroke);
shape1.SetPosition(608400, 1267200);
shape2.SetPosition(608400, 1400000);
slide.AddObject(shape1);
slide.AddObject(shape2);
slide.GroupDrawings([shape1, shape2]);

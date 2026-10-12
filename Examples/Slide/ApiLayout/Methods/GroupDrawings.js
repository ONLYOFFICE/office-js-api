// Combine multiple shapes into a single group on a layout in a presentation.

// How do I group shapes together on a layout in a presentation?

// Create two shapes and combine them into one grouped object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const shape1 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 70 * 36000, 40 * 36000, fill2, stroke);
shape1.SetPosition(20 * 36000, 30 * 36000);
shape2.SetPosition(120 * 36000, 75 * 36000);
layout.AddObject(shape1);
layout.AddObject(shape2);
layout.GroupDrawings([shape1, shape2]);
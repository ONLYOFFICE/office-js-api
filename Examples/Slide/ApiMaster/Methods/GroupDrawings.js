// Group multiple drawing objects on a slide master.

// Create two shapes with different colors and add them to the master.

// Group the shapes together using the GroupDrawings method on the master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const master = layout.GetMaster();

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill1 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const fill2 = Api.CreateSolidFill(Api.RGB(111, 255, 61));
const shape1 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill1, stroke);
const shape2 = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 60 * 36000, fill2, stroke);
shape1.SetPosition(608400, 1267200);
shape2.SetPosition(608400, 1400000);
master.AddObject(shape1);
master.AddObject(shape2);
master.GroupDrawings([shape1, shape2]);
// Retrieve a layout from a slide master by its index position.

// Access the master and create a layout object to apply to a slide.

// Add the layout to the master and apply it to the current slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const layout = Api.CreateLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

layout.AddObject(shape);
master.AddLayout(0, layout);
slide.ApplyLayout(master.GetLayout(0));
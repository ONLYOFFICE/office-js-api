// Create a copy of a slide layout in a presentation.

// How do I duplicate a layout from a presentation master in a presentation?

// Copy a layout and apply it to another slide in a presentation.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const slide = Api.CreateSlide();
presentation.AddSlide(slide);
const copyLayout = layout.Copy();
master.AddLayout(1, copyLayout);
slide.ApplyLayout(copyLayout);
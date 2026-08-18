// Add Unicode code points with exact character widths to a text run in a presentation.

// How do I insert characters preserving their exact widths into a text run in a presentation?

// Fill a text run inside a shape with the "Widths" word so that every character keeps the width specified in millimeters.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
paragraph.AddElement(run);
slide.AddObject(shape);

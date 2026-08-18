// Add Unicode code points with exact character widths to a paragraph in a presentation.

// How do I insert characters preserving their exact widths into a paragraph inside a shape in a presentation?

// Add the "Widths" word to a paragraph inside a shape so that every character keeps the width specified in millimeters.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Fixed widths: ");
paragraph.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);
slide.AddObject(shape);

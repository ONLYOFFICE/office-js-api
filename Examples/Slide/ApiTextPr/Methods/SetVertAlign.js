// Set the vertical alignment of text inside a shape in a presentation.

// How do I apply superscript or subscript formatting to text in a presentation?

// Get text properties and apply vertical alignment adjustments in a presentation.

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
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetVertAlign("superscript");
paragraph.SetJc("left");
run.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
paragraph.AddElement(run);
slide.AddObject(shape);
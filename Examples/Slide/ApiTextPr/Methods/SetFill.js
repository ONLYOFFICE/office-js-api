// Apply a color to text characters in a presentation.

// What color options are available for text in a presentation?

// Create a solid color fill and apply it to the text formatting in a presentation.

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

const textFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetFill(textFill);
run.AddText("This is a text run with the font color set to black using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
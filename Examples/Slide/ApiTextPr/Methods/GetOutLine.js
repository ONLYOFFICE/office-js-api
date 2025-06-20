// This example shows how to find out whether a text is outlined.

// How to know whether an outline is set to the text.

// Get the text properties of the run and find whether it is outlined or not.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
textPr.SetOutLine(stroke);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
stroke = textPr.GetOutLine();
const type = stroke.GetClassType();
paragraph.AddText("Text outline type: " + type);
docContent.Push(paragraph);

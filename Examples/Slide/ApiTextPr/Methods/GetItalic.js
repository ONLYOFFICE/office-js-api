// Find out whether a text is italic in a presentation.

// How to know whether a text is set to italic or not in a presentation.

// Get the text properties of the run and find whether it is italic or not in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
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
textPr.SetItalic(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const italic = textPr.GetItalic();
paragraph.AddText("Italic property: " + italic);
docContent.Push(paragraph);
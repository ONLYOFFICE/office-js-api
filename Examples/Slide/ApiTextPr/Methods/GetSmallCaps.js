// Check if text uses small capitals formatting in a presentation.

// How do I determine if text is displayed as small capitals in a presentation?

// Read the small capitals property to see if the style is enabled for text in a presentation.

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
textPr.SetSmallCaps(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const smallCaps = textPr.GetSmallCaps();
paragraph.AddText("Property of the small capitalized letters: " + smallCaps);
docContent.Push(paragraph);
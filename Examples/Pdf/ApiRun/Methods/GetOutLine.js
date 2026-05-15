// Check if text has an outline border applied in a PDF.

// How do I determine if text has an outline effect in a PDF?

// Verify the outline property of text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
run.SetOutLine(stroke);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
stroke = run.GetOutLine();
const type = stroke.GetClassType();
paragraph.AddText("Text outline type: " + type);
docContent.Push(paragraph);
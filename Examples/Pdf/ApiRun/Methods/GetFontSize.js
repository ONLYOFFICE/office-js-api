// This example shows how to find out a text font size.

// How to know font size of a text run.

// Get the run and display its font size.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
run.SetFontSize(60);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontSize = run.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
docContent.Push(paragraph);

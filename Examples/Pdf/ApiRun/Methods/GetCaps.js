// This example shows how to find out whether a text is capitalized.

// How to know whether the text letters are uppercase or not.

// Get the run and find whether it is capitalized or not.

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
run.SetCaps(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const caps = run.GetCaps();
paragraph.AddText("Property of the capitalized letters: " + caps);
docContent.Push(paragraph);

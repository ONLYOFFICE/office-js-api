// This example shows how to find out whether a text has a double strikethrough.

// How to know whether a text is crossed with two horizontal lines.

// Get the run and find whether it has a double strikethrough.

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
run.SetDoubleStrikeout(true);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const doubleStrikeout = run.GetDoubleStrikeout();
paragraph.AddText("Double strikeout property: " + doubleStrikeout);
docContent.Push(paragraph);

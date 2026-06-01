// Get the space between characters in text in a PDF.

// How do I check the character spacing of text in a PDF?

// Retrieve the spacing measurement for text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
run.SetSpacing(80);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const spacing = run.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
docContent.Push(paragraph);
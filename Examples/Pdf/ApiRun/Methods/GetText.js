// Extract the plain text content from a text run in a PDF.

// Tabs and line breaks of the run are returned with the specified symbols.

// Read the text of a run in a shape and show it in a new paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
const text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});

paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
docContent.Push(paragraph);
page.AddObject(shape);
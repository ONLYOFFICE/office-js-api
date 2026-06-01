// Get the text color applied to text in a PDF.

// How do I find out the text color in a PDF?

// Read the fill color settings of text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
run.SetTextFill(fill);
page.AddObject(shape);

paragraph = Api.CreateParagraph();
fill = run.GetTextFill();
const type = fill.GetClassType();
paragraph.AddText("Text fill type: " + type);
docContent.Push(paragraph);
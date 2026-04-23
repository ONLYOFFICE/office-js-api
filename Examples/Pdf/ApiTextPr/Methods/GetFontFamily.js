// Access the font name used for text in a PDF.

// How do I find out which font is applied to text in a PDF?

// Look up the font family name from text formatting properties in a PDF.

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

const textPr = run.GetTextPr();
textPr.SetFontFamily("Arial");
page.AddObject(shape);

paragraph = Api.CreateParagraph();
const fontFamily = textPr.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
docContent.Push(paragraph);
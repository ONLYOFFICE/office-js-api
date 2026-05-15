// Read the text of a paragraph inside a shape in a PDF.

// How do I retrieve the plain text from a paragraph inside a shape in a PDF?

// Extract a paragraph's text and display it in a second paragraph within the same shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Sample paragraph text.");
const text = paragraph.GetText();
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Paragraph text: " + text);
docContent.Push(infoParagraph);
page.AddObject(shape);

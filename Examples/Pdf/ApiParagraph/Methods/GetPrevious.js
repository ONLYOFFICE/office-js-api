// Navigate to the paragraph that precedes the current one in a PDF.

// How do I access the preceding paragraph before the current one in a PDF?

// Move backward to the previous paragraph and apply formatting in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
docContent.RemoveAllElements();

const paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph.");
docContent.Push(paragraph1);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph.");
docContent.Push(paragraph2);

page.AddObject(shape);
const previousParagraph = paragraph2.GetPrevious();
previousParagraph.SetBold(true);
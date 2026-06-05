// Add left margin spacing to a paragraph in a PDF.

// How do I indent text from the left edge in a PDF?

// Push paragraph content away from the left side in a PDF.

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
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph without any indent set to it. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes.");
docContent.Push(paragraph2);
page.AddObject(shape);
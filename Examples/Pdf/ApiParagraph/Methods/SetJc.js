// Align paragraph text to the left, center, or right in a PDF.

// Useful for positioning text alignment in a PDF.

// Justify paragraphs by distributing text across the width in a PDF.

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
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph with the text in it aligned by the right side. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph2.SetJc("right");
docContent.Push(paragraph2);

const paragraph3 = Api.CreateParagraph();
paragraph3.AddText("This is a paragraph with the text in it aligned by the left side. ");
paragraph3.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph3.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph3.SetJc("left");
docContent.Push(paragraph3);
page.AddObject(shape);
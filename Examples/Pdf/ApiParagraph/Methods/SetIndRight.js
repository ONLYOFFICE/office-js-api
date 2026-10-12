// Add right margin spacing to a paragraph in a PDF.

// Useful for indenting text from the right edge in a PDF.

// Push paragraph content away from the right side in a PDF.

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
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("We also aligned the text in it by the right side. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph without any offset set to it. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph2.AddText("These sentences are used to add lines for demonstrative purposes.");
docContent.Push(paragraph2);
page.AddObject(shape);
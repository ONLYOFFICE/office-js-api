// This example shows how to get the next paragraph.

// How to get the next paragraph of the current one.

// Return the next paragraph on the slide and make its text bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();

const paragraph1 = Api.CreateParagraph();
paragraph1.AddText("This is the first paragraph.");
docContent.Push(paragraph1);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph.");
docContent.Push(paragraph2);

slide.AddObject(shape);
const nextParagraph = paragraph1.GetNext();
nextParagraph.SetBold(true);

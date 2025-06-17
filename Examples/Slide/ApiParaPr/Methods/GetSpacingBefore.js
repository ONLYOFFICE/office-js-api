// This example shows how to get the spacing before value of the current paragraph.

// How to get the size of a spacing before a text from a paragraph.

// Return a property of the spacing size before a paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is an example of setting a space before a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("This is due to the fact that the second paragraph has this offset enabled.");

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
const paraPr = paragraph2.GetParaPr();
paraPr.SetSpacingBefore(1440);
docContent.Push(paragraph2);

const spacingBefore = paraPr.GetSpacingBefore();
const paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Spacing before: " + spacingBefore);
docContent.Push(paragraph3);

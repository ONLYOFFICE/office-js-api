// This example replaces text from two paragraphs with another text.

// How to replace a substring with another one.

// Replace text from an array with another one.

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
const firstParagraph = docContent.GetElement(0);
firstParagraph.AddText("This is the text for the first line. The line break is added after it.");
firstParagraph.AddLineBreak();

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddTabStop();
secondParagraph.AddText("This is just a sample text with a tab stop before it.");
docContent.AddElement(secondParagraph);
slide.AddObject(shape);
// todo_example problem (how to make select in slide)
// const range1 = firstParagraph.GetRange();
// const range2 = secondParagraph.GetRange();
// const range3 = range1.ExpandTo(range2);
// range3.Select();
const arr = ["test_1", "test_2"];
Api.ReplaceTextSmart(arr, "", "");

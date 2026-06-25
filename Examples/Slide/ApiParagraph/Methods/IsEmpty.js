// Check whether the current paragraph has no content elements.

// Verify that a newly created paragraph reports as empty.

// Confirm the empty state changes once text is added.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = Api.CreateParagraph();
const emptyBefore = paragraph.IsEmpty();
paragraph.AddText("This is a sample text.");
const emptyAfter = paragraph.IsEmpty();
docContent.Push(paragraph);
const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The paragraph was empty before adding text: " + emptyBefore + ". After adding text: " + emptyAfter + ".");
docContent.Push(resultParagraph);
slide.AddObject(shape);

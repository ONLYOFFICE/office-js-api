// This example sets the vertical alignment of runs within the text range to superscript.

// How to apply superscript or subscript alignment to a text range.

// Apply superscript vertical alignment to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("E=mc");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText("2", "after");

shape.GetTextRange().GetRange(4, 5).SetVertAlign("superscript");

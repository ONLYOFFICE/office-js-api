// Highlight the text within a range using a named color.

// Useful for drawing attention to a specific portion of text.

// Apply a red highlight to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be highlighted in yellow using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetHighlight("red");

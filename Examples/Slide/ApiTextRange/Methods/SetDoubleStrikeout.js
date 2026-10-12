// Apply double strikeout formatting to all runs within a text range.

// Useful for marking text as removed with a double-line strikethrough.

// Apply double strikeout to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will have double strikeout applied using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetDoubleStrikeout(true);

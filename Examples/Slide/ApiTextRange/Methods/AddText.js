// Insert text at the end of a text range in a presentation shape.

// Useful for appending text to a shape without replacing the existing content.

// Append " World" after the existing text in the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText(" World");
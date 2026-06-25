// Raise the first 10 characters of a text range above the baseline using a sub-range.

// Useful for creating superscript-like offsets on part of a string.

// Extract a sub-range with GetRange and apply a 50 half-point (25 pt) upward offset.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text is raised above the baseline.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.GetRange(0,10).SetPosition(50);

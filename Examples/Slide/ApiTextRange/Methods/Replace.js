// This example replaces all occurrences of a word in the text range.

// How to replace text within a text range.

// Replace every occurrence of "foo" with "bar".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("foo bar foo");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.Replace("foo", "bar");

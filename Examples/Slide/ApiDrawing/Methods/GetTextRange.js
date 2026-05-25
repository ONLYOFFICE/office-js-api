// Get the full text range of a shape that already has a text body.

// Returns null if the shape has no text body; use CreateTextRange to initialize one first.

// Create a shape, set text via CreateTextRange, then retrieve and modify it with GetTextRange.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.CreateTextRange().SetText("Hello World");
const range = shape.GetTextRange();
range.SetBold(true);

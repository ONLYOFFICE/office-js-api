// Get the full text range of a shape.

// Creates a text body for the shape if it does not already have one.

// Create a shape, set its text, then retrieve and modify the range with GetTextRange.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.GetTextRange().SetText("Hello World");
const range = shape.GetTextRange();
range.SetBold(true);

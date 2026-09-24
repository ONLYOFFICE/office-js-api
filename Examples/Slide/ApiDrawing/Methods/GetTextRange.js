// Get the full text range of a shape and use it to set formatted text.

// Creates a text body if the shape does not have one yet; returns null for drawings that are not shapes.

// Create a shape, get its text range, then set the text and make it bold.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetBold(true);

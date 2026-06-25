// Create a text body on a shape and return its full text range for editing.

// Unlike GetTextRange, this method initializes a text body if the shape does not have one.

// Create a shape, call CreateTextRange to initialize the body, and set formatted text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
const range = shape.CreateTextRange();
range.SetText("Created text body");
range.SetBold(true);
slide.RemoveAllObjects();
slide.AddObject(shape);

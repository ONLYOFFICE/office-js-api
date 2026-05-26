// Check whether a shape has an associated text body before and after adding text.

// Returns true if the shape already contains a text body, false otherwise.

// Create two shapes, use one to display results, and verify IsTextRange changes after CreateTextRange.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 1000000, 500000);
const shapeForDesc = Api.CreateShape("rect", 8000000, 3000000);
const paragraph = shapeForDesc.CreateTextRange().GetParagraph(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
slide.AddObject(shapeForDesc);
paragraph.AddText('Before add text shape.IsTextRange() === ' + shape.IsTextRange());
shape.CreateTextRange().SetText("Sample");
paragraph.AddText('\nAfter add text shape.IsTextRange() === ' + shape.IsTextRange());

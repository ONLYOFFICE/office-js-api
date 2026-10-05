// Remove characters before the cursor within a shape text range.

// The method works like the Backspace key and deletes characters or whole words to the left of the cursor.

// Create a shape, place the cursor after the second word, and delete this word.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
let range = shape.GetTextRange();
range.SetText("Hello Beautiful World");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(15);
presentation.RemoveBackward(10);

// Remove characters after the cursor within a shape text range.

// The method works like the Delete key and deletes characters or whole words to the right of the cursor.

// Create a shape, place the cursor before the second word, and delete this word.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
let range = shape.GetTextRange();
range.SetText("Hello Beautiful World");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(6);
presentation.RemoveForward(10);

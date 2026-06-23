// Insert text at the current cursor position within a shape text range.

// The cursor must be positioned first using MoveCursorToPos before calling EnterText.

// Create a shape, place the cursor mid-text, and insert a word at that position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
shape.GetTextRange().SetText("Hello World");
shape.GetTextRange().MoveCursorToPos(6);
presentation.EnterText("Beautiful ");
slide.RemoveAllObjects();
slide.AddObject(shape);

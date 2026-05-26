// Move the text cursor up one line within a multi-line shape text range.

// Advances the cursor from the current line to the corresponding position on the previous line.

// Set up a two-line shape, position the cursor on the last line, then move it up.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1500000);
shape.GetTextRange().SetText("First line\nSecond line");
shape.GetTextRange().MoveCursorToPos(22);
presentation.MoveCursorUp(1, false);
presentation.EnterText("[cursor] ");
slide.RemoveAllObjects();
slide.AddObject(shape);

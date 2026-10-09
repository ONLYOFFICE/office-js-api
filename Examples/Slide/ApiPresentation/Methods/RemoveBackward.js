// Remove characters before the text cursor within a shape text range.

// Text removal methods edit text in interactive or plugin mode, as the Backspace key does.

// Position the cursor at the end of the text, then remove the last word.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(range.GetEndPos());
presentation.RemoveBackward(6);
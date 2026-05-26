// Move the text cursor one position to the left within a shape text range.

// Cursor movement methods allow precise text navigation in interactive or plugin mode.

// Position the cursor at the end, move it left, then insert text at the earlier location.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.CreateTextRange();
range.SetText("Hello World");
range.SetColor(0,0,0);
range.MoveCursorToPos(range.GetEndPos());
presentation.MoveCursorLeft(5, false, false);
presentation.EnterText("Beautiful ");

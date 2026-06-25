// Move the text cursor one position to the right within a shape text range.

// Cursor movement methods allow precise text navigation in interactive or plugin mode.

// Position the cursor mid-word, move it right, then insert text at the new location.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.CreateTextRange().SetText("Hello World");
shape.GetTextRange().MoveCursorToPos(5);
presentation.MoveCursorRight(1, false, false);
presentation.EnterText(" Beautiful");

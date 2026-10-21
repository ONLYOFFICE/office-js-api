// Remove characters before the text cursor in a shape on a slide.

// Text removal methods edit text in interactive or plugin mode, as the Backspace key does.

// Select the paragraph, move the cursor to its end, then remove the last word.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 3000000, 1000000);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");
slide.AddObject(shape);

paragraph.Select();
presentation.MoveCursorRight();
presentation.RemoveBackward(6);
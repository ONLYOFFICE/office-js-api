// Insert a paragraph break at the current cursor position within a shape.

// Splits the text at the cursor into two separate paragraphs.

// Create a shape, position the cursor after the first word, and insert a paragraph break.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1500000);
const range = shape.CreateTextRange();
range.SetText("Hello World");
range.SetColor(0,0,0);
range.MoveCursorToPos(5);
presentation.InsertParagraphBreak();
slide.RemoveAllObjects();
slide.AddObject(shape);

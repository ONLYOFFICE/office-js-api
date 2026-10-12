// Replace the word at the cursor with another word in a presentation.

// How do I overwrite a single word based on where the cursor is placed in a presentation?

// Place the cursor inside a word of a shape and swap the word without retyping the rest of the text in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("The quick brown cat jumps over the lazy dog");
shape.GetTextRange().MoveCursorToPos(17);

presentation.ReplaceCurrentWord("fox");
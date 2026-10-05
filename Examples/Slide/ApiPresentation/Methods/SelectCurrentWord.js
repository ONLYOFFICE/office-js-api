// Select the word at the cursor in a presentation.

// How do I select a whole word from the cursor position in a presentation?

// Place the cursor inside a word of a shape, select the word and make it bold in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("The quick brown fox jumps over the lazy dog");
shape.GetTextRange().MoveCursorToPos(12);

presentation.SelectCurrentWord();
Api.GetSelection().GetTextRange().SetBold(true);
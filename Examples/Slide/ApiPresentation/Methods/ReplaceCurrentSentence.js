// Replace the sentence at the cursor with new text in a presentation.

// How do I substitute a whole sentence based on the cursor position in a presentation?

// Place the cursor inside the second sentence of a shape and replace the sentence with a new one in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("Slides tell a story. Every slide makes one point. Keep the text short.");
shape.GetTextRange().MoveCursorToPos(25);

presentation.ReplaceCurrentSentence("Every slide answers one question.");
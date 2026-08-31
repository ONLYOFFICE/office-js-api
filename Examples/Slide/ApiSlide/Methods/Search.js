// Find every occurrence of a word on a single slide and make the last match bold.

// Search is scoped to this slide (including its notes) and returns each match as a text range.

// Add a shape with repeated text, search the slide for a keyword, and embolden the final result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
shape.CreateTextRange().SetText("Sample text with a sample word and one more sample.");

const results = slide.Search("sample");
results[results.length - 1].SetBold(true);

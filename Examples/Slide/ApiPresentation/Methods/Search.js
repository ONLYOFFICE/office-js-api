// Find all occurrences of a word in a presentation and make the last match bold.

// Run a presentation-wide search that returns each match as a text range for further styling.

// Add a shape with repeated text, search for a keyword, and embolden the final result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.CreateTextRange().SetText("Sample text with a sample word and one more sample.");
const results = presentation.Search("sample", false);
results[results.length - 1].SetBold(true);

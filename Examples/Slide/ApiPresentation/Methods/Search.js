// Find text in a presentation by a string and by a regular expression, then bold the matches.

// Combine a presentation-wide keyword lookup with a RegExp that matches every numbered label.

// Add a shape with repeated text, bold the last keyword match, then bold each label found by the /№\d+/g expression.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);
shape.CreateTextRange().SetText("Sample item №1, sample item №2 and one more sample.");

const byKeyword = presentation.Search("sample", false);
byKeyword[byKeyword.length - 1].SetBold(true);

const byRegExp = presentation.Search(/№\d+/g);
for (let index = 0; index < byRegExp.length; index++)
	byRegExp[index].SetBold(true);

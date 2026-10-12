// Get the selected text of a shape as a text range in a presentation.

// How do I work with exactly the text the user has selected in a presentation?

// Select a word of a shape, make the selected text bold and show it in a second paragraph of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Only the selected word becomes bold");
slide.AddObject(shape);

paragraph.GetTextRange(9, 17).Select();
const range = Api.GetSelection().GetTextRange();
range.SetBold(true);
const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Selected text: " + range.GetText());
docContent.Push(resultParagraph);
// Apply an ApiTextPr object to all runs within a text range.

// Useful for applying a reusable formatting profile to a selection.

// Build an ApiTextPr with bold and large font, then apply it to the range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will receive custom formatting via SetTextPr.");
slide.AddObject(shape);

const helperRun = Api.CreateRun();
const textPr = helperRun.GetTextPr();
textPr.SetBold(true);
textPr.SetFontSize(32);

const range = shape.GetTextRange();
range.SetTextPr(textPr);

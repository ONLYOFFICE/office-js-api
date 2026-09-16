// Attach a hyperlink to part of a shape's text in a presentation.

// The range must stay within a single paragraph, and either a link or a bookmark name is required, not both.

// Turn the word "here" into a link to the ONLYOFFICE website.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Click here to learn more");
slide.AddObject(shape);

const range = shape.GetTextRange();
const link = range.GetRange(6, 10);
link.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");

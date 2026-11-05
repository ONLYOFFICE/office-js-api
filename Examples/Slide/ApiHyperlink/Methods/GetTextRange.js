// Make the text of a hyperlink in a shape on a slide italic through a text range.

// A hyperlink keeps its own runs, and the range covers exactly the text of the link.

// Take the range of the whole hyperlink text and apply italic to it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Open ONLYOFFICE website");
const hyperlink = shape.GetTextRange().GetRange(5, 23).AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE website");

const range = hyperlink.GetTextRange();
range.SetItalic(true);
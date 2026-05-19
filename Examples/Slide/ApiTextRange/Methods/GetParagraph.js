// This example gets a paragraph by index from the text range and displays its text.

// How to access a specific paragraph inside a text range.

// Retrieve the second paragraph of a multi-paragraph shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("First paragraph");
const para2 = Api.CreateParagraph();
para2.AddText("Second paragraph");
docContent.Push(para2);
slide.AddObject(shape);

const range = shape.GetTextRange();
const paragraph = range.GetParagraph(1);

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("Paragraph(1): " + JSON.stringify(paragraph.GetText()));
slide.AddObject(shape2);

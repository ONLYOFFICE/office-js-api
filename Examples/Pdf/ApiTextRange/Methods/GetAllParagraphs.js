// Get all paragraphs covered by a text range in a PDF shape.

// Useful for iterating over every paragraph within a selection.

// Retrieve all paragraphs and display their count.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 180 * 36000, 75 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("First paragraph");
const para2 = Api.CreateParagraph();
para2.AddText("Second paragraph");
docContent.Push(para2);
const para3 = Api.CreateParagraph();
para3.AddText("Third paragraph");
docContent.Push(para3);
page.AddObject(shape);

const range = shape.GetTextRange();
const paragraphs = range.GetAllParagraphs();

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 180 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 4000000);
shape2.GetDocContent().GetElement(0).AddText("Total paragraphs: " + paragraphs.length);
page.AddObject(shape2);

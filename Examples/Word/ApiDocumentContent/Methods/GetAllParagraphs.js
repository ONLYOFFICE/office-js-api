// This example shows how to get an array of all paragraphs from the document content.

// Get all paragraphs added to the document.

// How to retrieve all paragraphs and make the first one bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
paragraph = docContent.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
docContent.Push(paragraph);
let paragraphs = docContent.GetAllParagraphs();
paragraphs[0].SetBold(true);
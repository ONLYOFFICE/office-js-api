// Delete a single paragraph from a shape's content in a PDF.

// How do I remove one paragraph from inside a shape in a PDF?

// Erase a specific text block by its position in a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the first paragraph.");
docContent.RemoveElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. The first paragraph was removed from the document content.");
docContent.Push(paragraph);
page.AddObject(shape);
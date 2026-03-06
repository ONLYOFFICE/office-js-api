// This example shows how to remove an element.

// How to remove an elements from the page shape.

// Get a page shape's content and remove an element from it using its index.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the first paragraph.");
docContent.RemoveElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second paragraph. The first paragraph was removed from the document content.");
docContent.Push(paragraph);
page.AddObject(shape);

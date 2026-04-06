// This example creates a paragraph copy.

// How to add a duplicate paragraph.

// Copy a paragraph and add it to the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
docContent.RemoveAllElements();

const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is just a sample text that was copied.");
docContent.Push(paragraph);

const copyParagraph = paragraph.Copy();
docContent.Push(copyParagraph);
page.AddObject(shape);

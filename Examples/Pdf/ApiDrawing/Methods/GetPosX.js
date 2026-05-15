// Find the left-to-right position of a shape in a PDF.

// How do I check the X coordinate of an object in a PDF?

// Read the horizontal distance of a shape from the left edge in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText(`Drawing X position is: ${shape.GetPosX()}`);
docContent.Push(paragraph);
page.AddObject(shape);
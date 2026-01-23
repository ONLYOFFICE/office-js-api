// How to get and display a Y position of a drawing.

// Get a shape object from a page and get its Y position.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 425, 184, fill, stroke);
shape.SetPosition(48, 100);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText(`Drawing Y position is: ${shape.GetPosY()}`);
docContent.Push(paragraph);
page.AddObject(shape);
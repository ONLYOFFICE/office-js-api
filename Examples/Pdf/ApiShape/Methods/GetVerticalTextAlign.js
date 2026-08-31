// Read the vertical text alignment of a shape in a PDF.

// Useful for verifying vertical text placement before adjusting shape layout in a PDF.

// Retrieve the current vertical alignment of a shape's inner content in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

shape.SetVerticalTextAlign("center");
const verticalAlign = shape.GetVerticalTextAlign();
const docContent = shape.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.Push(paragraph);
page.AddObject(shape);

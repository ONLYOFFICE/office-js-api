// Read the vertical text alignment of a shape in a presentation.

// Useful for verifying vertical text placement before adjusting shape layout in a presentation.

// Retrieve the current vertical alignment of a shape's inner content in a presentation.

const presentation = Api.GetPresentation();
presentation.SetSizes(254 * 36000, 190 * 36000);
const slide = presentation.GetCurrentSlide();
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartOnlineStorage", 200 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

shape.SetVerticalTextAlign("center");
const verticalAlign = shape.GetVerticalTextAlign();
const docContent = shape.GetDocContent();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("The shape vertical text alignment is: " + verticalAlign);
docContent.Push(paragraph);
slide.AddObject(shape);

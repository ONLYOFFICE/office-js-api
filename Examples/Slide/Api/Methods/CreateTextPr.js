// This example shows how to create a text properties and use it.

// How to change text style, size and font.

// Change text properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const textPr = Api.CreateTextPr();
textPr.SetFontSize(50);
textPr.SetBold(true);
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
const run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 25 points and the font weight set to bold.");
run.SetTextPr(textPr);
paragraph.AddElement(run);
docContent.Push(paragraph);
slide.AddObject(shape);

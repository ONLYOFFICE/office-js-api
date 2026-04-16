// Create a text properties and use it in a PDF document.

// How to change text style, size and font in a PDF document.

// Change text properties using the editor API in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
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
page.AddObject(shape);
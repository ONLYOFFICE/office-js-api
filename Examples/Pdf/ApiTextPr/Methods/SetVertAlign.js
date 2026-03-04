// This example specifies the alignment which will be applied to the contents of the run in relation to the default appearance of the run text.

// How to set a vertical alignment of the text.

// Get the text properties of the run and make it superscript, subscript, etc.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetVertAlign("superscript");
paragraph.SetJc("left");
run.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
paragraph.AddElement(run);
page.AddObject(shape);

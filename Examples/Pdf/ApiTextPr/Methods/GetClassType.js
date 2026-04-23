// Identify the object type of text formatting settings in a PDF.

// How do I determine what kind of formatting object I'm working with in a PDF?

// Retrieve the classification information for text properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
paragraph.SetJc("left");
const classType = textPr.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
page.AddObject(shape);
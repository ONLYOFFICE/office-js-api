// Retrieve the class type of a text properties in a presentation.

// How to identify the class type of a text properties in a presentation?

// Obtain the class type identifier of a text properties object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
paragraph.SetJc("left");
const classType = textPr.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
slide.AddObject(shape);
// This example shows how to create a slide master.

// How to add master to the slide.

// Create new slide master and apply it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = Api.CreateMaster();

let nCountBefore = presentation.GetMastersCount();
presentation.AddMaster(nCountBefore, master);
let nCountAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
var docContent = shape.GetDocContent();
var paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before adding new master: " + nCountBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after adding new master: " + nCountAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

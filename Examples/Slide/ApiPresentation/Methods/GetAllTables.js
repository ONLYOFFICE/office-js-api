// This example show how to get an array with all tables from the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const slideTable = editor.CreateTable(2, 2);
slide.RemoveAllObjects();
slide.AddObject(slideTable);

const masterTable = editor.CreateTable(2, 2);
master.AddObject(masterTable);

const layoutTable = editor.CreateTable(2, 2);
layout.AddObject(layoutTable);

const fillColor = Api.CreateRGBColor(100, 100, 200);
const fill = Api.CreateSolidFill(fillColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(45 * 36000, 100 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Number of tables on slide: " + slide.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide layout: " + layout.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Number of tables on slide master: " + master.GetAllTables().length);
paragraph.AddLineBreak();
paragraph.AddText("Total number of tables in presentation: " + presentation.GetAllTables().length);

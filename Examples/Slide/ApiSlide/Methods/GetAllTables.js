// This example show how to get an array with all tables from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = editor.CreateTable(3, 2);
table.GetRow(0).GetCell(0).GetContent().GetCurrentParagraph().AddText('US');
table.GetRow(0).GetCell(1).GetContent().GetCurrentParagraph().AddText('CH');
table.GetRow(0).GetCell(2).GetContent().GetCurrentParagraph().AddText('Others');
table.GetRow(1).GetCell(0).GetContent().GetCurrentParagraph().AddText('11.59');
table.GetRow(1).GetCell(1).GetContent().GetCurrentParagraph().AddText('8.27');
table.GetRow(1).GetCell(2).GetContent().GetCurrentParagraph().AddText('80.14');

const fillColor = Api.CreateRGBColor(100, 100, 200);
const fill = Api.CreateSolidFill(fillColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(45 * 36000, 100 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const type = table.GetClassType();
paragraph.AddText("Class type = " + type);

slide.RemoveAllObjects();
slide.AddObject(table);
slide.AddObject(shape);

// This example shows how to get a parent table that contains the graphic object.
let document = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let cell = table.GetCell(1, 1);
cell.AddElement(0, paragraph);
document.Push(table);
let parentTable = drawing.GetParentTable();
let tableStyle = document.GetStyle("Bordered");
parentTable.SetStyle(tableStyle);
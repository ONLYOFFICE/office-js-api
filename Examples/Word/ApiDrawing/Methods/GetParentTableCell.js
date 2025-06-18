// This example showh how to get a parent table cell that contains the graphic object.

// Get an element's parent table cell.

// How to show the shape's wrapper table cell.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
let tableStyle = doc.GetStyle("Bordered");
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
let cell = table.GetCell(1, 1);
cell.GetContent().GetElement(0).AddDrawing(drawing);
doc.Push(table);
let parentCell = drawing.GetParentTableCell();
let cellContent = parentCell.GetContent().GetElement(0);
cellContent.AddLineBreak();
cellContent.AddText("This is a parent cell");
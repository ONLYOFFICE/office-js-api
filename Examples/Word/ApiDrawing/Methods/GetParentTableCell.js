// Retrieve the table cell that contains a drawing object in a document.

// How do I find which table cell holds a drawing in a document?

// Useful when you need to add text alongside a shape placed inside a table cell in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
let tableStyle = doc.GetStyle("Bordered");
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
let cell = table.GetCell(1, 1);
cell.GetContent().GetElement(0).AddDrawing(drawing);
doc.Push(table);
let parentCell = drawing.GetParentTableCell();
let cellContent = parentCell.GetContent().GetElement(0);
cellContent.AddLineBreak();
cellContent.AddText("This is a parent cell");
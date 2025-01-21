// This example shows how to get a table that contains the paragraph.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
document.Push(table);
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let parentTable = paragraph.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);
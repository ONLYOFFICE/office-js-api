// This example shows how to get a cell by its position.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
tableRow.SetHeight("atLeast", 1440);
let cell = tableRow.GetCell(1);
cell.SetVerticalAlign("bottom");
let paragraph = cell.GetContent().GetElement(0);
paragraph.AddText("Align bottom");
table.SetStyle(tableStyle);
document.Push(table);
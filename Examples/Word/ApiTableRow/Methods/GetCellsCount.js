// This example shows how to get a number of cells in the row.
let document = Api.GetDocument();
let tableStyle = document.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(document.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
let cellsCount = tableRow.GetCellsCount();
table.SetStyle(tableStyle);
document.Push(table);
let paragraph = document.GetElement(0);
paragraph.AddText("Number of cells in the first row = " + cellsCount);
// This example shows how to get a number of cells in the row.

// How to count the cells of the row.

// Display the number of row cells.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
let cellsCount = tableRow.GetCellsCount();
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of cells in the first row = " + cellsCount);
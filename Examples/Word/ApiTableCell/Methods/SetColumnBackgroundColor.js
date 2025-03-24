// This example sets the background color to all cells in the column containing the cell.

// How to color the cell column background.

// Set the rose color as a background color of the cell column.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(255, 111, 61, false);
doc.Push(table);
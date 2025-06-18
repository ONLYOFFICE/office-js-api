// This example removes a table column with the specified cell.

// How to remove the column from the table.

// Create a table, get one of its cells and delete the column.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and remove one column (the second one), so that it becomes 2x3:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(2).GetCell(1);
table.RemoveColumn(cell);
doc.Push(table);
// This example adds a new column to the table.

// How to insert a column to the table.

// Get a table cell from the row and add it as a column.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new column, so that it becomes 3x2:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddColumn(table.GetRow(0).GetCell(1), true);
doc.Push(table);
// Insert an extra column into an existing table to expand its structure in a document.

// How do I add a column next to an existing one to widen a table in a document?

// Grow a table horizontally by placing a new column at a chosen position in a document.

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
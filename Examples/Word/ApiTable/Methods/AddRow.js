// Insert a new row into a table in a document.

// Make room for more data by adding an extra row to a table in a document.

// Extend a table by inserting a row before a chosen row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new row before the second one, so that the table has 3 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
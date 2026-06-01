// Retrieve the table that contains a specific row in a document.

// How do I get a reference to the whole table from one of its rows in a document?

// Reach back from a row to its containing table to apply changes at the table level in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(0);
let parentTable = row.GetParentTable();
parentTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
doc.Push(parentTable);
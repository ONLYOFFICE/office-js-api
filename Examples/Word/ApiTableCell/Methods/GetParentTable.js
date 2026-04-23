// Access the table that contains a specific cell in a document.

// How do I get the table that a particular cell belongs to in a document?

// Reach the surrounding table from a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentTable = table.GetCell(0, 0).GetParentTable();
parentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
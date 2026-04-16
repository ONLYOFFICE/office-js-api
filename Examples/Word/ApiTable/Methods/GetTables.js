// Get the nested tables of the specified table in a document.

// How to get all tables from the table object in a document.

// Get array of tables and update their width in a document.

let doc = Api.GetDocument();
let table1 = Api.CreateTable(3, 3);
let table2 = Api.CreateTable(3, 3);
let table3 = Api.CreateTable(2, 2);
let cell1 = table1.GetRow(0).GetCell(0);
let cell2 = table1.GetRow(1).GetCell(1);
table1.AddElement(cell1, 0, table2);
table1.AddElement(cell2, 0, table3);
table1.SetWidth("percent", 100);
doc.Push(table1);
let arrTables = table1.GetTables();
arrTables[0].SetWidth("percent", 50);
arrTables[1].SetWidth("percent", 30);
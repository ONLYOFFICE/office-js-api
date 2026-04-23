// Access the cell that directly contains a nested table in a document.

// How do I find the cell that holds a nested table in a document?

// Locate the surrounding cell so its appearance can be adjusted in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table1 = Api.CreateTable(3, 3);
table1.SetWidth("percent", 100);
table1.SetStyle(tableStyle);
doc.Push(table1);
let table2 = Api.CreateTable(2, 2);
table2.SetWidth("percent", 100);
table2.SetStyle(tableStyle);
let cell = table1.GetCell(0, 0);
table1.AddElement(cell, 0, table2);
let parentTableCell = table2.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));
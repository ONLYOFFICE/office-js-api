// This example shows how to get a table cell that contains the table.

// How to get the parent table cell.

// Retrieve the parent table cell, apply the shading to it.

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
parentTableCell.SetShd("clear", 255, 111, 61, false);
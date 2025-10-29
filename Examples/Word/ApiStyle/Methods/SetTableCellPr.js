// This example shows how set get the table cell properties to the style.

// How to create table cell properties for style and add shading to it.

// Update the table cell properties in the style.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableCellPr = Api.CreateTableCellPr();
tableCellPr.SetShd("clear", 255, 111, 61);
tableStyle.SetTableCellPr(tableCellPr);

let table = Api.CreateTable(2, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
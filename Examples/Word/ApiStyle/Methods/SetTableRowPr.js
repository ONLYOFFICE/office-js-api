// Set the table row properties to the current style in a document.

// How to create table row properties for style and set its height in a document.

// Update table row properties in the style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let tableRowPr = Api.CreateTableRowPr();
tableRowPr.SetHeight("atLeast", 1440);
tableStyle.SetTableRowPr(tableRowPr);

let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, false, false);
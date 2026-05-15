// Save row-level formatting such as height into a table style so all rows share those dimensions in a document.

// How do I set a minimum row height for every table row by defining it in the table style in a document?

// Enforce uniform row sizing across a table by embedding the row settings in a reusable style in a document.

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
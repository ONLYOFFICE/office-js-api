// Set the formatting properties for a table row in a document.

// SetRowPr applies an ApiTableRowPr object to configure row appearance such as height.

// Create a table, build row properties with a fixed minimum height, and apply them to the first row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let row = table.GetRow(0);
let rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720);
row.SetRowPr(rowPr);

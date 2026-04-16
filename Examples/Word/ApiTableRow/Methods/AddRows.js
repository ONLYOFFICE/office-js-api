// Add the new rows to the table in a document.

// How to add rows to the row in a document.

// Get a table row and insert two new rows after it in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("Second row");
table.SetWidth("percent", 100);
row.AddRows(1, true);
doc.Push(table);
// Get the row index in a document.

// Display the row index in a document.

// Get the index of the table row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let row = table.GetRow(1);
row.GetCell(0).GetContent().GetElement(0).AddText("Row index: " + row.GetIndex());
doc.Push(table);
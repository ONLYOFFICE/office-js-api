// Find the row position of a table cell in a document.

// How do I determine which row a table cell is located in in a document?

// Look up the row number that a table cell occupies in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Row index: " + table.GetCell(0, 0).GetRowIndex());
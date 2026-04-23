// Access the row that contains a specific table cell in a document.

// How do I get the row that a table cell belongs to in a document?

// Reach the containing row from a table cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
let parentRow = table.GetCell(0, 0).GetParentRow();
parentRow.SetHeight("atLeast", 720);
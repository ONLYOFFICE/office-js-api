// Insert additional rows below an existing cell in a table in a document.

// How do I add more rows beneath a specific cell in a table in a document?

// Extend a table downward by appending rows after a chosen cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.GetCell(0, 0).AddRows(2, false);
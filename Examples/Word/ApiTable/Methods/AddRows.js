// Insert multiple rows into a table at once in a document.

// How do I add several rows to a table in a document?

// Grow a table by placing a batch of new rows after a selected cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new rows were added after this cell.");
table.AddRows(cell, 2, false);
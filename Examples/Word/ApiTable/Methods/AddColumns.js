// Add extra columns to an existing table in a document.

// How do I insert additional columns into a table in a document?

// Expand a table sideways by placing new columns at a chosen position in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let cell = table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
table.AddColumns(cell, 2, false);
// Get the width of a specific table column in a document.

// Read a column width value measured in English measure units.

// Create a table, set the first column width and read it back.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetColumnWidth(0, Api.MillimetersToEmus(40));
let columnWidth = table.GetColumnWidth(0);
let paragraph = doc.GetElement(0);
paragraph.AddText("Column width: " + columnWidth);

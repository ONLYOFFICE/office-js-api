// Set the width of a specific table column in a document.

// Apply a width value measured in English measure units to a single column.

// Create a 3x3 table and widen its first column to 40 millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.SetColumnWidth(0, Api.MillimetersToEmus(40));

// Append text to the last paragraph in a table cell in a document.

// How do I add text to a table cell in a document?

// Insert a sentence into the last paragraph of a cell to populate a table in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.Cells[0][0];
cell.AddText("Cell content.");

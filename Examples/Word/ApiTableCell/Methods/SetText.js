// Replace all content in a table cell with plain text in a document.

// How do I overwrite the text of a table cell in a document?

// Clear an existing cell and write a new sentence into it, preserving formatting in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.Cells[0][0];
cell.AddText("Original cell content.");
cell.SetText("Updated cell content.");

// Read the inner text of a table cell in a document.

// Retrieve the plain text from a table cell in a document.

// Extract text from a cell and display it in a separate paragraph below the table in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.GetCell(0, 0);
cell.AddText("Cell content.");
let text = cell.GetText({TableCellSeparator : ""});
let para = Api.CreateParagraph();
para.AddText("Cell text: " + text);
doc.Push(para);

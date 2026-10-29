// Move the cursor to the start of a table row in a document.

// The cursor is placed at the start of the first cell in the row.

// Enter text into the first cell of the second row.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let row = table.GetRow(1);
row.MoveCursorToStart();
doc.EnterText("Row 2, first cell");

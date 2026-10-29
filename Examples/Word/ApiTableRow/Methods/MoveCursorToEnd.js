// Move the cursor to the end of a table row in a document.

// The cursor is placed at the end of the last cell in the row.

// Enter text into the last cell of the second row.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let row = table.GetRow(1);
row.MoveCursorToEnd();
doc.EnterText("Row 2, last cell");

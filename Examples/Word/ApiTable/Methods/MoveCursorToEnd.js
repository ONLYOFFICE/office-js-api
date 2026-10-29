// Move the cursor to the end of a table in a document.

// The cursor is placed at the end of the last cell.

// Enter text into the last cell of the table.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
table.MoveCursorToEnd();
doc.EnterText("Last cell");

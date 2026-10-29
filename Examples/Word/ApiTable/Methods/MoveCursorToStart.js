// Move the cursor to the start of a table in a document.

// The cursor is placed at the start of the first cell.

// Enter text into the first cell of the table.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
table.MoveCursorToStart();
doc.EnterText("First cell");

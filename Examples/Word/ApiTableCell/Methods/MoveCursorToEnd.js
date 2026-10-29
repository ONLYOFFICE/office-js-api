// Move the cursor to the end of a table cell in a document.

// The cursor is placed after the existing text of the cell.

// Insert new text after the cell text.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(doc.GetStyle("Bordered"));
doc.Push(table);
let cell = table.GetCell(1, 1);
cell.GetContent().GetElement(0).AddText("Existing text.");
cell.MoveCursorToEnd();
doc.EnterText(" New text.");

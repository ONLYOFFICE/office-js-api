// Move the cursor to the previous cell of a table in a document.

// Navigate between adjacent table cells without selecting a cell directly.

// Add text at the cursor position after moving back to the previous cell in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.InsertContent([table]);
let cell = table.Cells[0][2];
cell.GetContent().GetRange(0, 0).MoveCursorToPos(0);
doc.MoveToPrevCell();
doc.EnterText("Prev cell");


// Move the cursor to the next cell of a table in a document.

// Navigate between adjacent table cells without selecting a cell directly.

// Add text at the cursor position after moving to the next cell in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.InsertContent([table]);
let cell = table.Cells[0][0];
cell.GetContent().GetRange(0, 0).MoveCursorToPos(0);
doc.MoveToNextCell();
doc.EnterText("Next cell");

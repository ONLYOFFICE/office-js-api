// Retrieve all cells from the columns that contain selected cells in a document.

// GetSelectedColumnsCells returns every cell in each column that has at least one selected cell.

// Create a table, select a range of cells, then get all cells from the affected columns in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorRight(3, true);
let columnCells = table.GetSelectedColumnsCells();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Cells in selected columns: " + columnCells.length);
doc.Push(paragraph);

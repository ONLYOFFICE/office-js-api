// Retrieve the currently selected cells from a table in a document.

// GetSelectedCells returns an array of ApiTableCell objects for the active selection.

// Create a table, select a range of cells, then count how many were selected in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorRight(3, true);
let selectedCells = table.GetSelectedCells();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Selected cells: " + selectedCells.length);
doc.Push(paragraph);

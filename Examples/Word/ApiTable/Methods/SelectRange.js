// Select a rectangular range of cells in a table in a document.

// Highlight a block of cells spanning several rows and columns for further editing.

// Select the cells from the first cell of the first row to the second cell of the third row.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
doc.Push(table);
table.GetCell(0, 0).SetText("Start of the selected range.");
table.GetCell(2, 1).SetText("End of the selected range.");
table.SelectRange(0, 0, 1, 2);

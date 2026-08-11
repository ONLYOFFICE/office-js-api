// Get the full text range of a PDF table cell to read or modify its content.

// Returns an ApiTextRange spanning all text in the cell, or null if the cell has no content.

// Create a table, add text to a cell, then retrieve and format it through GetTextRange.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Hello");
page.AddObject(table);

const range = cell.GetTextRange();
range.SetBold(true);

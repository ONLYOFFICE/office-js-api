// Add Unicode code points with exact character widths to a table cell in a document.

// How do I append characters preserving their exact widths to a table cell in a document?

// Append the "Widths" word to the last paragraph of a cell so that every character keeps the width specified in millimeters.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.Push(table);
let cell = table.Cells[0][0];
cell.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);

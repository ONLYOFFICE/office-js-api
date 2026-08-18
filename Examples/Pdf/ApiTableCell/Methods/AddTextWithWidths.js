// Add Unicode code points with exact character widths to a table cell in a PDF.

// How do I append characters preserving their exact widths to a table cell in a PDF?

// Append the "Widths" word to the last paragraph of a cell so that every character keeps the width specified in millimeters.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText([87, 105, 100, 116, 104, 115], [5, 3, 4, 3, 4, 3]);

page.AddObject(table);

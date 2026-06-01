// Add a left border to a table cell in a PDF.

// How do I create a border on the left edge of a cell in a PDF?

// Draw a styled line along the left side of a table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderLeft(2, fill);

page.AddObject(table);
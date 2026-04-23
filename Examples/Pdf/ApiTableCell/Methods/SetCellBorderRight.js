// Set the right border of a table cell with a fill color in a PDF.

// How do I customize the appearance of the right edge of a cell in a PDF?

// Style the border on the right side of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderRight(2, fill);

page.AddObject(table);
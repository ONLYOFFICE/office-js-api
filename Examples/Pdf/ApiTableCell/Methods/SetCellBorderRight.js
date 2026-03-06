// How to set cell right border with its fill color.

// Create table and set its cell right border.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderRight(2, fill);

page.AddObject(table);

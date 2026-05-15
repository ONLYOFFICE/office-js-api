// Apply a border with fill color to the bottom of a table cell.

// Set the bottom border style and fill for the cell.

// Create a table cell and apply a bottom border with color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetCellBorderBottom(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);
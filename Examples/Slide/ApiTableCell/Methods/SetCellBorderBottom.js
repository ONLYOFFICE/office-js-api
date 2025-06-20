// This example sets the border which shall be displayed at the bottom of the table cell.

// How to set cell bottom border with its fill color.

// Create table and set its cell bottom border.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetCellBorderBottom(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);

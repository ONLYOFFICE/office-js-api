// This example specifies the shading which shall be applied to the extents of the current table cell.

// How to set shading fill to the cell.

// Create table and set its cell shading color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetShd(fill);

slide.RemoveAllObjects();
slide.AddObject(table);

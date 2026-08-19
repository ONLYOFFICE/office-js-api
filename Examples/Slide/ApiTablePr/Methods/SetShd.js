// Fill the table background through its table properties in a presentation.

// The table background is drawn under the cells, so it shows through the cells which have no fill.

// Apply a yellow background to the table style and clear the cell fills to make it visible.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetShd(Api.CreateSolidFill(Api.CreateRGBColor(255, 213, 79)));
style.SetTablePr(tablePr);
table.Cells.forEach(function (row) { row.forEach(function (cell) { cell.SetShd("nil"); }); });
slide.RemoveAllObjects();
slide.AddObject(table);

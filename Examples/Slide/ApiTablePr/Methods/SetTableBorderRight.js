// Set the right table border through the table properties in a presentation.

// Passing the "none" border style removes the border and needs no fill.

// Apply a dark gray border to the right of the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderRight("single", 1, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

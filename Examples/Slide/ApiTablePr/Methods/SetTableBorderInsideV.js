// Set the inner vertical borders through the table properties in a presentation.

// Inner vertical borders are all the column separators except the outer edges.

// Draw thin orange separators between the table columns.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderInsideV("single", 0.5, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

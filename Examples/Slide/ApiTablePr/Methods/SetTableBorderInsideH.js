// Set the inner horizontal borders through the table properties in a presentation.

// Inner horizontal borders are all the row separators except the outer edges.

// Draw thin orange separators between the table rows.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderInsideH("single", 0.5, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

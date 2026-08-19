// Set all the table borders at once through the table properties in a presentation.

// SetTableBorderAll applies the same border to the outer edges and to the inner separators.

// Draw a uniform dark gray grid for the whole table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderAll("single", 2, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

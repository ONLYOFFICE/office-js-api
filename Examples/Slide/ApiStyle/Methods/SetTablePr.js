// Apply the table properties to a presentation table style.

// The properties are applied to every table which uses this style.

// Set a dark gray grid for the table style and use the style in a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

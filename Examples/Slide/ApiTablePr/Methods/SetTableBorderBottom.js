// Set the bottom table border through the table properties in a presentation.

// The border is described by its style, its width in millimeters and its fill.

// Apply a dark gray border below the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderBottom("single", 1, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

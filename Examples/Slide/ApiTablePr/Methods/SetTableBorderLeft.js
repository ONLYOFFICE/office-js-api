// Set the left table border through the table properties in a presentation.

// The border fill accepts any ApiFill object, not only a solid color.

// Apply a dark gray border to the left of the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderLeft("single", 1, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

// Set the top table border through the table properties in a presentation.

// The border width is measured in millimeters and the color is passed as an ApiFill object.

// Apply a dark gray border above the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(style);
const tablePr = style.GetTablePr();
tablePr.SetTableBorderTop("single", 1, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

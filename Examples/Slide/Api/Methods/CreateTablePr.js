// Create a reusable table properties object in a presentation.

// Api.CreateTablePr returns empty table properties that can be filled and applied to a table style.

// Build table properties with a dark gray grid and apply them to the style of a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = Api.CreateTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

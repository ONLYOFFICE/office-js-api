// Apply different formatting to specific regions of a table based on their position in a presentation.

// Table styles let you apply distinct formatting to structural regions of a table in a presentation.

// Target individual table areas such as the whole table, banded rows or corner cells to give them unique visual treatment in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = Api.CreateTablePr();
tablePr.SetTableBorderBottom("single", 2, Api.CreateSolidFill(Api.CreateRGBColor(0, 255, 0)));
style.GetConditionalTableStyle("wholeTable").SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

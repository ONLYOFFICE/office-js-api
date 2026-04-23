// Add a colored border to the left side of a table cell in a presentation.

// How do I add a colored border to the left side of a table cell in a presentation?

// Create a table and apply a left border with a solid color fill in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetCellBorderLeft(2, fill);

slide.RemoveAllObjects();
slide.AddObject(table);
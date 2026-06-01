// Apply a background color to a table cell in a presentation.

// How do I fill a table cell with a color in a presentation?

// Create a table and set a solid color background for a cell in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
cell.SetShd(fill);

slide.RemoveAllObjects();
slide.AddObject(table);
// Set the background color for all cells in the column containing the cell in a presentation.

// Useful for coloring an entire column background.

// Set an orange background for the entire first column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 4);
const cell = table.GetRow(0).GetCell(0);
cell.SetColumnBackgroundColor(255, 111, 61, false);
slide.RemoveAllObjects();
slide.AddObject(table);

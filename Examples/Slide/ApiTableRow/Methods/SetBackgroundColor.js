// Set the background color for all cells in a table row in a presentation.

// Useful for coloring the background of a row.

// Set an orange background for the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
row.SetBackgroundColor(255, 111, 61, false);
slide.RemoveAllObjects();
slide.AddObject(table);
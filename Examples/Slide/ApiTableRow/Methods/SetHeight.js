// Set the height of a table row.

// Create a table and access the first row.

// Apply a new height value to the row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

slide.RemoveAllObjects();
slide.AddObject(table);
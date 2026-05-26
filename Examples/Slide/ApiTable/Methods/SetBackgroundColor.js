// This example sets the background color for all cells in the table.

// How to set a background color for the entire table.

// Create a table and apply an orange background color to all cells.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(3, 3);
const color = Api.CreateRGB(255, 111, 61);
table.SetBackgroundColor(color);

slide.RemoveAllObjects();
slide.AddObject(table);
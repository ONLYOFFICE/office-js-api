// This example sets the background color of a table cell.

// How to color the background of a cell.

// Set an orange background for the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);
slide.RemoveAllObjects();
slide.AddObject(table);
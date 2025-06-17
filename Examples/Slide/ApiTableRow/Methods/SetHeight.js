// This example sets the height to the table row.

// How to set a height of the row.

// Create a table and change its rows height.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

slide.RemoveAllObjects();
slide.AddObject(table);

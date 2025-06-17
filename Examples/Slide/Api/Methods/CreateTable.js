// This example creates a 2x4 table and inserts it into the presentation.

// How to create new table with two rows and four columns.

// Add a table to the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
slide.RemoveAllObjects();
slide.AddObject(table);

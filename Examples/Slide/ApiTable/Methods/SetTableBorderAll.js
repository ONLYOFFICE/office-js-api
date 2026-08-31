// Set a uniform border for the entire table in a presentation.

// Useful for setting a single border style for all table borders at once.

// Create a 3x3 table and apply a border to all sides.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableBorderAll("single", 48, 0, 250, 20, 200);
slide.RemoveAllObjects();
slide.AddObject(table);

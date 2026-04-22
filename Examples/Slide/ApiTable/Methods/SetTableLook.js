// Set a table look in a presentation.

// How to set a table look with options in a presentation.

// Create the table object and set its look in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 4);
table.SetTableLook(true, false, false, false, false, true);
slide.RemoveAllObjects();
slide.AddObject(table);
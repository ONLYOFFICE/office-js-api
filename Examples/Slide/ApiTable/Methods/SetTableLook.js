// Configure visual styling options for a table.

// Set formatting flags to control table appearance and style.

// Create a table and apply visual styling with configuration flags.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);
slide.RemoveAllObjects();
slide.AddObject(table);
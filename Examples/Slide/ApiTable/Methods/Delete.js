// Delete the table from the slide in a presentation.

// Useful for removing a table from the presentation slide.

// Create a table and then delete it from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
table.Delete();

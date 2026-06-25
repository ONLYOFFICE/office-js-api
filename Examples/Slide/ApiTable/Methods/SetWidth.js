// Set the preferred width of the table in a presentation.

// Useful for setting the width of a table.

// Create a table and set its width to a fixed value.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetWidth("twips", 5000);
slide.RemoveAllObjects();
slide.AddObject(table);

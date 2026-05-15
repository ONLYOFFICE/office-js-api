// Add a table with multiple rows and columns to a presentation.

// How do I insert a table with specific dimensions in a presentation?

// Create a table with 2 rows and 4 columns and place it on a slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
slide.RemoveAllObjects();
slide.AddObject(table);
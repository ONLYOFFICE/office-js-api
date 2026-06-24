// Get the description of the table in a presentation.

// Needed when retrieving a table description.

// Create a table, set its description, and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableDescription("Sales data for Q1 2025");
const description = table.GetTableDescription();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table description: " + description);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

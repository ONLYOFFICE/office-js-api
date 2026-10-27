// Get the internal identifier of the table in a presentation.

// Useful for getting a unique identifier of a table.

// Create a table and display its internal id in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const id = table.GetInternalId();
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table id: " + id);
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

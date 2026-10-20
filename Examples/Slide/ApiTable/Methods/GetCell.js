// Get a table cell by its row and column index in a presentation.

// Useful for accessing a specific cell in a table.

// Create a table and add text to the cell at row 0, column 1.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetCell(0, 1);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row 0, Col 1");
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

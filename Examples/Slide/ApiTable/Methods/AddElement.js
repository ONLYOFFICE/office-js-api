// Add a paragraph at a specific position inside a table cell on a slide.

// Insert a document element into the chosen cell by its position.

// Create a table and add a paragraph as the first element of its first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
slide.RemoveAllObjects();
slide.AddObject(table);
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Inserted paragraph");
table.AddElement(cell, 0, paragraph);

// Clear the content from the table in a presentation.

// Useful for clearing all content from a table.

// Create a table with text in a cell, then clear the table content.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const paragraph = Api.CreateParagraph();
paragraph.AddText("This text will be cleared.");
table.GetCell(0, 0).GetContent().Push(paragraph);
table.Clear();
slide.RemoveAllObjects();
slide.AddObject(table);

// Clear the content of a table cell in a presentation.

// Useful for removing all content from a cell.

// Add text to a cell and then clear it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("This text will be cleared.");
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("First cell was cleared.")
cell.GetContent().Push(paragraph);
cell.Clear();
table.GetRow(1).GetCell(0).GetContent().Push(paragraph2);
slide.RemoveAllObjects();
slide.AddObject(table);

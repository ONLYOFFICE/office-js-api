// Get the row index in a presentation.

// Useful for getting the index of a table row.

// Get the index of the second row and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(1);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row index: " + row.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
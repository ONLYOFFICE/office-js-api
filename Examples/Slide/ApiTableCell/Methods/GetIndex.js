// Get the column index of a table cell in a presentation.

// Useful for getting the position index of the cell.

// Retrieve the cell index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Cell index: " + cell.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

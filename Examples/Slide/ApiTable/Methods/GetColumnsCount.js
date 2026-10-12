// Get the number of columns in the table in a presentation.

// Useful for counting the number of columns in a table.

// Create a table, add a column, and display the column count in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
const countBefore = table.GetColumnsCount();
table.AddColumn();
const countAfter = table.GetColumnsCount();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Columns before: " + countBefore + ", after adding: " + countAfter);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
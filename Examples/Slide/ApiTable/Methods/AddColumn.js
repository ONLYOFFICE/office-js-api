// Add a new column to the table in a presentation.

// How to insert a column to the table in a presentation.

// Create a 4x2 table, set its position and then insert a column to it in a presentation.

const presentation = Api.GetPresentation();
presentation.SetSizes(300 * 36000, 190 * 36000);

const table = Api.CreateTable(4, 2);
table.SetPosition(0 * 36000, 60 * 36000);
table.AddColumn(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(1);
const content = cell.GetContent();

const paragraph = Api.CreateParagraph();
paragraph.AddText("New column was added here.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);
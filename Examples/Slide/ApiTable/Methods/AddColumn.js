// Insert a new column into a table in a presentation.

// How do I add a new column to a table in a presentation?

// Create a table and add an extra column with content in a presentation.

const presentation = Api.GetPresentation();
presentation.SetSizes(300 * 36000, 190 * 36000);

const table = Api.CreateTable(2, 4);
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
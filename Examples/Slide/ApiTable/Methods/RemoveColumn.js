// Remove a table column using a cell reference.

// Delete a column from the table by specifying a cell within it.

// Create a table and remove a column using a cell from that column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
let cell = row.GetCell(1);
table.RemoveColumn(cell);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The second column was removed.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
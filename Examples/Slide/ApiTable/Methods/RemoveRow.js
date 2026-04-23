// Remove a table row using a cell reference.

// Delete a row from the table by specifying a cell within it.

// Create a table and remove a row using a cell from that row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
let row = table.GetRow(0);
let cell = row.GetCell(0);
table.RemoveRow(cell);
row = table.GetRow(0);
cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("The first row was removed.");
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);
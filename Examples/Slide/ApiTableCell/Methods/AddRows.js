// Add new rows to the table via a cell in a presentation.

// Useful for inserting rows after a specific cell.

// Add two rows after the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.GetContent().Push(Api.CreateParagraph().AddText("Two new rows added after this cell."));
cell.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);

// Add new columns to the table via a cell in a presentation.

// Useful for inserting columns after a specific cell.

// Add two columns after the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Two new columns added after this cell.");
cell.GetContent().Push(paragraph);
const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Second cell.");
const lastCell = table.GetRow(0).GetCell(1);
lastCell.GetContent().Push(paragraph2);
cell.AddColumns(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);

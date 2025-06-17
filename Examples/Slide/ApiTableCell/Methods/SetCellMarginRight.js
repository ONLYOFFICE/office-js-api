// This example specifies an amount of space which shall be left between the right extent of the current cell contents and the right edge border of a specific individual table cell within a table.

// How to set the cell right margin for the current table cell.

// Specify the right margin value for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginRight(600);

slide.RemoveAllObjects();
slide.AddObject(table);

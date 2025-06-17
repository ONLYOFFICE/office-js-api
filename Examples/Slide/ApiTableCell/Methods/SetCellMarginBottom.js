// This example shows how to specify an amount of space which shall be left between the bottom extent of the cell contents and the border of a specific individual table cell within a table.

// How to set the cell bottom margin for the current table cell.

// Specify the bottom margin value for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginBottom(600);

slide.RemoveAllObjects();
slide.AddObject(table);

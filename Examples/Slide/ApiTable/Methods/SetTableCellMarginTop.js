// Specify the amount of space left between the top of the cell content and the cell border in a presentation.

// Useful for setting the top cell margin for all cells in the table.

// Create a table and set a top cell margin of 36 points.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Top margin is set.");
table.GetCell(0, 0).GetContent().Push(paragraph);
table.SetTableCellMarginTop(720);
slide.RemoveAllObjects();
slide.AddObject(table);

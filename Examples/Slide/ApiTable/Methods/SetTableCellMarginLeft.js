// This example specifies the amount of space left between the left side of the cell content and the cell border.

// How to set the left cell margin for all cells in the table.

// Create a table and set a left cell margin of 36 points.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Left\nmargin\nis set.");
table.GetCell(0, 0).GetContent().Push(paragraph);
table.SetTableCellMarginLeft(720);
slide.RemoveAllObjects();
slide.AddObject(table);

// Specify the amount of space left between the bottom of the cell content and the cell border in a presentation.

// Useful for setting the bottom cell margin for all cells in the table.

// Create a table and set a bottom cell margin.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Bottom\nmargin\nis set.");
table.GetCell(0, 0).GetContent().Push(paragraph);
table.SetTableCellMarginBottom(720);
slide.RemoveAllObjects();
slide.AddObject(table);

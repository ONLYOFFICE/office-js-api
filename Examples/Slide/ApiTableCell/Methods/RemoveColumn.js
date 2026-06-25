// Remove the column containing the cell in a presentation.

// Useful for deleting a column by its cell.

// Get the first cell and remove its entire column.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("This column will be removed.")
cell.GetContent().Push(para);
cell.RemoveColumn();
slide.RemoveAllObjects();
slide.AddObject(table);
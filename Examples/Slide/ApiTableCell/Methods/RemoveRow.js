// Remove the row containing the cell in a presentation.

// Useful for deleting a row by its cell.

// Get the first cell and remove its entire row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(0);
const para = Api.CreateParagraph();
para.AddText("This row will be removed.")
cell.GetContent().Push(para);
cell.RemoveRow();
slide.RemoveAllObjects();
slide.AddObject(table);

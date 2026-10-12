// Get the next row in a presentation.

// Useful for getting the next row from a table row.

// Display text in the first and second rows using GetNext.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const firstRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row");
const para2 = Api.CreateParagraph();
para2.AddText("Second row");
firstRow.GetCell(0).GetContent().Push(para);
firstRow.GetNext().GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
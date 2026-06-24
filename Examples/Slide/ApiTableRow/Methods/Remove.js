// Remove a table row in a presentation.

// Useful for deleting a row from the table.

// Remove the first row from the table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row");
const para2 = Api.CreateParagraph();
para2.AddText("First row was removed");
row.GetCell(0).GetContent().Push(para);
row.Remove();
table.GetRow(0).GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
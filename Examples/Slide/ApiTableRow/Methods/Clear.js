// This example clears the content from a table row.

// How to remove all content from a row.

// Add text to the first row and then clear it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("This text will be cleared")
row.GetCell(0).GetContent().Push(para);
row.Clear();
const para2 = Api.CreateParagraph();
para2.AddText("First row was cleared")
table.GetRow(1).GetCell(0).GetContent().Push(para2);
slide.RemoveAllObjects();
slide.AddObject(table);
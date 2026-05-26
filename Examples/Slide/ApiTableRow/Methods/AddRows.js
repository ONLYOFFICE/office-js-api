// This example adds new rows to the table.

// How to add rows after a specific row.

// Insert two new rows after the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row")
row.GetCell(0).GetContent().Push(para);
row.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);
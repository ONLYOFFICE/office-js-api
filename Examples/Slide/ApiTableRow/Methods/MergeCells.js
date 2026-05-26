// This example merges all cells in a table row.

// How to merge cells of a row into one.

// Merge all cells of the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("Merged row");
row.MergeCells();
row.GetCell(0).GetContent().Push(para);
slide.RemoveAllObjects();
slide.AddObject(table);
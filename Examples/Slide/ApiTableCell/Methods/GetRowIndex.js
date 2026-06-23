// This example shows how to get the row index of a table cell.

// How to get the row index of the cell.

// Retrieve the row index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(1).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row index: " + cell.GetRowIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

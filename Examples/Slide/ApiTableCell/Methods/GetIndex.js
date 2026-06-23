// This example shows how to get the column index of a table cell.

// How to get the position index of the cell.

// Retrieve the cell index and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const cell = table.GetRow(0).GetCell(1);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Cell index: " + cell.GetIndex());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

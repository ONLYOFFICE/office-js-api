// This example gets the internal identifier of the table cell.

// How to get a unique identifier of a cell.

// Retrieve the internal id and display it in the cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Internal id: " + cell.GetInternalId());
content.Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

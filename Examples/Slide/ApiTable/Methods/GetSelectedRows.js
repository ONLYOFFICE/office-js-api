// Get the selected rows from the table in a presentation.

// Useful for retrieving currently selected rows in a table.

// Create a table and get the list of selected rows (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 3);
table.GetCell(0, 0).Select();
const selectedRows = table.GetSelectedRows();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected rows count: " + selectedRows.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
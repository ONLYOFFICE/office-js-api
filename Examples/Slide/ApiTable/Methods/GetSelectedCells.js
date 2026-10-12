// Get the selected cells from the table in a presentation.

// Useful for retrieving currently selected cells in a table.

// Create a table and get the list of selected cells (returns empty when no selection).

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).Select();
presentation.MoveCursorRight(3, true, false);
const selectedCells = table.GetSelectedCells();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Selected cells count: " + selectedCells.length);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
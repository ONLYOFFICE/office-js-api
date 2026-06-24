// Get the background color of a table cell in a presentation.

// Needed when reading the background color of a cell.

// Set a background color and read it back.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(255, 111, 61, false);
const color = cell.GetBackgroundColor();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Background color: " + (color ? color.GetHex() : "none"));
cell.GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
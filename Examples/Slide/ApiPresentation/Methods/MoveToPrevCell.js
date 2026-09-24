// Move the cursor to the previous cell of a table on a slide.

// Navigate between adjacent table cells without selecting a cell directly.

// Add text to the previous cell after moving the cursor back to it on a slide.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let table = Api.CreateTable(2, 2);
slide.AddObject(table);
table.Cells[0][1].Select();
presentation.EnterText("First selected cell");
presentation.MoveToPrevCell();
presentation.EnterText("Previous cell");
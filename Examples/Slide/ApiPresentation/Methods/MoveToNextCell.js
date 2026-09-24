// Move the cursor to the next cell of a table on a slide.

// Navigate between adjacent table cells without selecting a cell directly.

// Add text to the next cell after moving the cursor to it on a slide.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let table = Api.CreateTable(2, 2);
slide.AddObject(table);
table.Cells[0][0].Select();
presentation.EnterText("First cell");
presentation.MoveToNextCell();
presentation.EnterText("Second cell");

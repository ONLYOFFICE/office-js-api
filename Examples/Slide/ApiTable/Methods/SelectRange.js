// Select a rectangular range of cells in a table on a slide.

// Highlight a block of cells spanning several rows and columns to apply changes to them.

// Select the cells from the first cell of the first row to the second cell of the second row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
slide.AddObject(table);
table.SelectRange(0, 0, 1, 1);
const selectedCells = table.GetSelectedCells();
selectedCells.forEach(function(cell){
    cell.SetBackgroundColor(Api.RGB(150, 0, 0))
})

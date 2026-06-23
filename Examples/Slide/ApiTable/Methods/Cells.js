// Get every cell of a table on a slide as a grid.

// Access all cells by row and column as a two-dimensional array.

// Create a table and fill each cell with its coordinates.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
const cells = table.Cells;
for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
        cells[i][j].SetText("R" + (i + 1) + "C" + (j + 1));
    }
}

// Get all rows of a table on a slide.

// Access the table rows as an array of row objects.

// Create a table and label each row with its number in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
const rows = table.Rows;
for (let i = 0; i < rows.length; i++) {
    rows[i].GetCell(0).SetText("Row " + (i + 1));
}

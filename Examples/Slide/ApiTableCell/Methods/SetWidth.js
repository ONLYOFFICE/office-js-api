// Set a preferred width on individual cells in a presentation table.

// ApiTableCell.SetWidth stores a fixed width value in the cell's properties.

// Create a table and set the first column cells width.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
for (let r = 0; r < 3; r++) {
	table.GetRow(r).GetCell(0).SetWidth("twips", 5660);
}
slide.RemoveAllObjects();
slide.AddObject(table);
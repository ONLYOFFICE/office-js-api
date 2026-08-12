// Apply text formatting to every cell of a table row in a presentation.

// SetTextPr pushes the given ApiTextPr to all cells of the row at once, so a header row can be styled in one call.

// Fill the first row with captions and make its text bold in a single call.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
for (let i = 0; i < row.GetCellsCount(); i++) {
	let cell = row.GetCell(i);
	let range = cell.SetText("Header " + (i + 1));
}
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);
slide.RemoveAllObjects();
slide.AddObject(table);

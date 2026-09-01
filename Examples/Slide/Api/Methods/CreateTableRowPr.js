// Create a reusable table row properties object in a presentation.

// The new object holds empty row properties that can be filled once and applied to several rows.

// Build row properties with a minimum height and apply the same object to every row of a table on a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1000);
for (let i = 0; i < 3; i++) {
	table.GetRow(i).SetRowPr(rowPr);
}
slide.RemoveAllObjects();
slide.AddObject(table);

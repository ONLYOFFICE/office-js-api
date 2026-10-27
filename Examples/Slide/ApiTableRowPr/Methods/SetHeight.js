// Set a minimum row height in a presentation table using row properties.

// SetHeight applies a height rule and value to the row properties object.

// Create a table, build row properties with a fixed minimum height, and apply them to each row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight("atLeast", 1500);
	table.GetRow(i).SetRowPr(rowPr);
}
slide.RemoveAllObjects();
slide.AddObject(table);


// Set the properties for a table row in a presentation.

// Useful for applying row properties to a table row.

// Set the height of the first row using row properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720*3);
row.SetRowPr(rowPr);
slide.RemoveAllObjects();
slide.AddObject(table);
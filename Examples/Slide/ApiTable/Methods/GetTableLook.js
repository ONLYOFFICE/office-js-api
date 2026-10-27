// Read the visual styling options applied to a table.

// Get the formatting flags that control table appearance and style.

// Create a table, apply styling flags, and read them back.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(4, 4);
table.SetTableLook(true, false, false, false, false, true);
const tableLook = table.GetTableLook();
table.GetRow(0).GetCell(0).GetContent().GetElement(0).AddText("First column: " + tableLook.firstCol);
slide.RemoveAllObjects();
slide.AddObject(table);

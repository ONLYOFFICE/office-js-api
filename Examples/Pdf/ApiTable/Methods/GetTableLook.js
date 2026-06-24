// Read the styling options applied to a table in a PDF.

// Useful for checking which formatting options apply to a table before changing its style in a PDF.

// Retrieve the conditional formatting flags of a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
table.SetTableLook(true, false, false, false, false, true);
const tableLook = table.GetTableLook();
table.GetRow(0).GetCell(0).AddText("First column: " + tableLook.firstCol + ", vertical banding: " + tableLook.bandVer);

page.AddObject(table);

// Create a reusable table row properties object in a PDF.

// How do I build row formatting settings before applying them to a table row in a PDF?

// Create empty row properties, set a minimum height, and apply them to every row of a table in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight("atLeast", 1500);
	table.GetRow(i).SetRowPr(rowPr);
}

page.AddObject(table);

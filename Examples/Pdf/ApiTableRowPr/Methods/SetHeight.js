// Set a minimum row height in a PDF table using row properties.

// How do I apply the same minimum row height to every row of a table in a PDF?

// Create a table, build row properties with a fixed minimum height, and apply them to each row in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let i = 0; i < 3; i++) {
	const rowPr = Api.CreateTableRowPr();
	rowPr.SetHeight('atLeast', 1500);
	table.GetRow(i).SetRowPr(rowPr);
}

page.AddObject(table);

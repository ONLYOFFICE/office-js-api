// Set a preferred width on individual table cells in a PDF.

// How do I give specific cells a fixed width in a PDF table?

// Create a table and set the first column cells width in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
for (let r = 0; r < 3; r++) {
	table.GetRow(r).GetCell(0).SetWidth('twips', 5660);
}

page.AddObject(table);

// Create a shading object and apply it to table cells in a PDF.

// Build the shading once with Api.CreateShd and reuse it for several table cells in a PDF.

// Shade the first row of a new table with the accent1 theme color in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 3);
const shd = Api.CreateShd('clear', Api.Color('accent1'));
const row = table.GetRow(0);
for (let i = 0; i < 3; i++) {
    row.GetCell(i).SetShd(shd);
}

page.AddObject(table);
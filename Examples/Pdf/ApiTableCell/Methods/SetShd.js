// Apply a background fill color to a table cell in a PDF.

// How do I change the background color of a table cell in a PDF?

// Color the background of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
cell.SetShd(fill);

page.AddObject(table);
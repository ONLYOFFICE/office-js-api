// Retrieve the type of a shading object in a PDF.

// Check whether a shading fills the background before applying it in a PDF.

// Shade a table cell and write the shading type into it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#E2EFDA'));
cell.SetShd(shd);
cell.AddText('Shading type = ' + shd.GetType());

page.AddObject(table);
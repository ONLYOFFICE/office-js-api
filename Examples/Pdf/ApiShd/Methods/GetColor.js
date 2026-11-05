// Retrieve the color of a shading object in a PDF.

// Read back the color stored in a shading object in a PDF.

// Shade a table cell and write the shading color into it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#FCE4D6'));
cell.SetShd(shd);
cell.AddText('Shading color = ' + shd.GetColor().GetHex());

page.AddObject(table);
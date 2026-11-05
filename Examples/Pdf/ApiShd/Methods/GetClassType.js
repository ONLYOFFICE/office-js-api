// Retrieve the class type of a shading object in a PDF.

// Confirm the type name of a shading object before applying it in a PDF.

// Shade a table cell and write the class type of the shading into it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#DDEBF7'));
cell.SetShd(shd);
cell.AddText('Class type = ' + shd.GetClassType());

page.AddObject(table);
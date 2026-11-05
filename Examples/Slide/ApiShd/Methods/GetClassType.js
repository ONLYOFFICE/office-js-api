// Retrieve the class type of a shading object on a slide.

// Confirm the type name of a shading object before applying it on a slide.

// Shade a table cell and write the class type of the shading into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#DDEBF7'));
cell.SetShd(shd);
cell.AddText('Class type = ' + shd.GetClassType());

slide.AddObject(table);
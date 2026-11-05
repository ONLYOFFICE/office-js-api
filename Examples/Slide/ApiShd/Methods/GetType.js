// Retrieve the type of a shading object on a slide.

// Check whether a shading fills the background before applying it on a slide.

// Shade a table cell and write the shading type into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#E2EFDA'));
cell.SetShd(shd);
cell.AddText('Shading type = ' + shd.GetType());

slide.AddObject(table);
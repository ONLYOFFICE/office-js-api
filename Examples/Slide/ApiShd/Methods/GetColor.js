// Retrieve the color of a shading object on a slide.

// Read back the color stored in a shading object on a slide.

// Shade a table cell and write the shading color into it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(1).GetCell(0);
const shd = Api.CreateShd('clear', Api.Color('#FCE4D6'));
cell.SetShd(shd);
cell.AddText('Shading color = ' + shd.GetColor().GetHex());

slide.AddObject(table);
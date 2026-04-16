// Specify the shading which shall be applied to the extents of the table in a presentation.

// How to add a shading to the table background in a presentation.

// Create a table, set its shading color and add it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetShd("clear", Api.HexColor('#FF6F3D'));
slide.RemoveAllObjects();
slide.AddObject(table);
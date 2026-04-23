// Apply shading color to a table in a presentation.

// Set the background shading for the entire table.

// Create a table, apply a shading color, and add it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetShd("clear", Api.HexColor('#FF6F3D'));
slide.RemoveAllObjects();
slide.AddObject(table);
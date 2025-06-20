// This example specifies the shading which shall be applied to the extents of the table.

// How to add a shading to the table background.

// Create a table, set its shading color and add it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 4);
table.SetShd("clear", 255, 111, 61);
slide.RemoveAllObjects();
slide.AddObject(table);

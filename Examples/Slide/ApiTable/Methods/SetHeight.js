// Set the total height of a table on a slide.

// Distribute the requested height proportionally among the table rows.

// Create a table on a slide and set its overall height to 80 millimeters.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
table.SetHeight(Api.MillimetersToEmus(80));

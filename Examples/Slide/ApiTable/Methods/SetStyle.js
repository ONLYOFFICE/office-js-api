// Apply a named table style from the presentation to the current table.

// SetStyle looks up the style by name from the presentation's available table styles.

// Create a table, retrieve the first available style by name, and apply it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
slide.AddObject(table);
const style = presentation.GetStyle("Medium Style 2 - Accent 2");
table.SetStyle(style);
table.GetCell(0,0).AddText('Set style for table: ' + style.GetName());


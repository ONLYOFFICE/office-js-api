// Get a named table style, rename it, and apply it to a table.

// Use GetStyle to retrieve a built-in table style by name and customize it.

// Fetch "Dark Style 1 - Accent 2", rename it, and apply it to a 3×3 table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
style.SetName("My Custom Table Style");
const paragraph = Api.CreateParagraph();
paragraph.AddText("New style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

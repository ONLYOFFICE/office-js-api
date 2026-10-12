// Get the type of the current table style in a presentation.

// Helps when reading the type of a table style.

// Get a table style and display its type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Style type: " + style.GetType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

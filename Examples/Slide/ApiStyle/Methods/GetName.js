// This example gets the name of the current style.

// How to get the name of a table style.

// Get a table style and display its name in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

// This example sets a new name for the style.

// How to rename a table style.

// Get a table style, rename it, and display the new name.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
style.SetName("My Custom Table Style");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("New style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

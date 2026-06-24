// Set the title of the table in a presentation.

// Useful for setting and retrieving a table title.

// Create a table, set its title, and display the title in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableTitle("Quarterly Report");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table title: " + table.GetTableTitle());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

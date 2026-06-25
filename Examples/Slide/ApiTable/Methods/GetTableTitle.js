// Get the title of the table in a presentation.

// Needed when retrieving a table title.

// Create a table, set its title, and display the title in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableTitle("Quarterly Report");
const title = table.GetTableTitle();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table title: " + title);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
//TODO

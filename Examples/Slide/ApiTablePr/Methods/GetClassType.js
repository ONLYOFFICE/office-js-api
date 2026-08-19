// Check the class type of the table properties object in a presentation.

// GetClassType returns "tablePr" for any table properties object.

// Read the class type of the table style properties and write it into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = style.GetTablePr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + tablePr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

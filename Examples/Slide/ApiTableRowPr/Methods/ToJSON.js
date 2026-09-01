// Convert the table row properties into their JSON representation in a presentation.

// The row properties are serialized into a string so their settings can be stored or transferred.

// Build row properties with a minimum height, apply them to the first row, and write their JSON string into the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720);
row.SetRowPr(rowPr);
const json = rowPr.ToJSON();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Row properties JSON: " + json);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

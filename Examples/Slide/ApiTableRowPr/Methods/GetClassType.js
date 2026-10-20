// Get the class type of the table row properties object in a presentation.

// Helps when checking the class type of ApiTableRowPr.

// Apply the row properties to the first row and display their class type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1500);
row.SetRowPr(rowPr);
const classType = rowPr.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

// This example gets the class type of the table row properties object.

// How to get a class type of ApiTableRowPr.

// Retrieve the class type and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const classType = row.GetClassType();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
row.GetCell(0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

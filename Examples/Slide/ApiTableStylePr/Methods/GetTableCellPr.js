// Get the cell properties from the table style part in a presentation.

// Useful for getting cell properties from a conditional table style.

// Get the wholeTable style part and display its cell properties class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const cellPr = stylepr.GetTableCellPr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("GetTableCellPr class type: " + cellPr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

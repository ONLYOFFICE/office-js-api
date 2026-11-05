// Get a conditional formatting part of a presentation table style.

// The returned part keeps the table properties applied to the matching region of a table.

// Set orange borders for the wholeTable part and display the part type in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const wholeTable = style.GetConditionalTableStyle("wholeTable");
const tablePr = wholeTable.GetTablePr();
tablePr.SetTableBorderAll("single", 1, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
wholeTable.SetTablePr(tablePr);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Conditional style part: " + wholeTable.GetType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
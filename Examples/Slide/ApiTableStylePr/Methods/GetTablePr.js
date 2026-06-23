// This example gets the table properties from the table style part.

// How to get table properties from a conditional table style.

// Get the wholeTable style part and set a border using its table properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
const stylepr = style.GetConditionalTableStyle("wholeTable");
const tablePr = stylepr.GetTablePr();
const paragraph = Api.CreateParagraph();
paragraph.AddText("GetTablePr class type: " + tablePr.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);

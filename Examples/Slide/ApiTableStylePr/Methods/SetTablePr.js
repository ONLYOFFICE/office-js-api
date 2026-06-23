// Modify the wholeTable conditional style of a named table style and apply it to a table.

// ApiTableStylePr.SetTablePr updates the table properties stored in a conditional style part.

// Get the wholeTable part of a presentation style, set cell spacing, and apply the style to a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 2");
table.SetStyle(style);
const stylepr = style.GetConditionalTableStyle("wholeTable");
const tablePr = stylepr.GetTablePr();
tablePr.SetCellSpacing(300);
stylepr.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);

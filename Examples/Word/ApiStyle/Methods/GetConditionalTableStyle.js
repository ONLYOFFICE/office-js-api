// This example shows how to get a set of formatting properties which will be conditionally applied to the parts of a table that match the requirement specified in the sType parameter.

// How to find out a style that will be applied to the table elements whish satisfy the condition.

// Retrieve a conditional table style.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
doc.Push(table);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetTablePr().SetTableBorderTop("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderBottom("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderLeft("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderRight("single", 4, 0, 51, 51, 51);
tableStyle.GetTablePr().SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
tableStyle.GetTablePr().SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetItalic(true);
let cellContent = table.GetRow(0).GetCell(0).GetContent();
let paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is set to italic");
cellContent = table.GetRow(1).GetCell(0).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");
cellContent = table.GetRow(0).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font remains default");
cellContent = table.GetRow(1).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font also remains default");
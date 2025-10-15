// This example shows how to create and set the formatting properties which will be conditionally applied to the parts of a table that match the requirement specified in the sType parameter.

// How to create a style that will be applied to the table elements whish satisfy the condition.

// Create a conditional table style.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);

table.SetWidth("percent", 100);

let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);

let tableStylePr = Api.CreateTableStylePr('wholeTable');
let tablePr = tableStyle.GetTablePr();
tablePr.SetTableBorderTop("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderRight("single", 4, 0, 51, 51, 51);
tablePr.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
tablePr.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
tableStylePr.GetTextPr().SetItalic(true);

tableStyle.SetConditionalTableStyle(tableStylePr);

let cellContent = table.GetRow(0).GetCell(0).GetContent();
let paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is set to italic");

cellContent = table.GetRow(1).GetCell(0).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

cellContent = table.GetRow(0).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

cellContent = table.GetRow(1).GetCell(1).GetContent();
paragraph = cellContent.GetElement(0);
paragraph.AddText("This cell font is also set to italic");

doc.Push(table);
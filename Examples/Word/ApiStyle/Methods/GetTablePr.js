// Adjust the spacing inside table cells through a shared style in a document.

// How do I set padding around content inside table cells using a style in a document?

// Control the inner margins of every cell in a table by modifying the style in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
let tablePr = tableStyle.GetTablePr();
tablePr.SetTableInd(0);
tablePr.SetTableCellMarginTop(720);
tablePr.SetTableCellMarginLeft(120);
tablePr.SetTableCellMarginRight(120);
tablePr.SetTableCellMarginBottom(0);
doc.Push(table);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
tableStyle.GetConditionalTableStyle("topRightCell").GetTableCellPr().SetShd("clear", 51, 51, 51);
tableStyle.GetConditionalTableStyle("bottomLeftCell").GetTableCellPr().SetShd("clear", 128, 128, 128);
tableStyle.GetConditionalTableStyle("bottomRightCell").GetTableCellPr().SetShd("clear", 255, 213, 191);
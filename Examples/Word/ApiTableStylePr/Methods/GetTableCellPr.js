// This example shows how to get a set of the table cell properties which will be applied to all the cells within a table which match the conditional formatting type.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and set the gray shading for cell #1:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableStylePr = oTableStyle.GetConditionalTableStyle("topLeftCell");
oTable.SetTableLook(true, true, true, true, true, true);
oTableStylePr.GetTableCellPr().SetShd("clear", 0xEE, 0xEE, 0xEE);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);